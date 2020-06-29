import React, {useState, useEffect} from 'react'
import '../../styles/MyOrders.css'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import MyOrderItem from './MyOrderItem'
import Table from 'react-bootstrap/Table'

function MyOrders({username}) {
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState('');
    const [orders,setOrders] = useState([])

    useEffect(() => {
        let mounted = true;
        if(username !== ''){
                axios.get(`/api/get/active-orders/${username}`)
                .then(response => {
                    if(mounted){
                    console.log('ACTIVE ORDERS',response.data)
                    setLoading(false)
                    let sorted = response.data.slice().sort((a, b) => new Date(a.date) - new Date(b.date))
                    setOrders(sorted);
                    setError('');
                    }
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false)
                    setOrders([])
                    setError('Something went wrong!');
                })
            return () => mounted = false        
         }
     },[username])

    return (
        <div className = "my-orders-container">
            <div className="my-orders-header">
                <h3>You have <span className="post-num">{orders.length}</span> active orders.</h3>
            </div>
    {loading ? <div className="home-spinner"><Spinner animation="border" variant="info" /> </div> : 
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Item</th>
                <th>Address</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {orders.length > 0 ? orders.map((element, index) => <MyOrderItem key={index} orderNum={index}  title={element.menuItemTitle} quantity={element.qty} address={element.address} orderID={element._id}/>) : <></>} 
            </tbody>     
        </Table>}
                {err ? err : null}
        </div>
    )
}
 
export default MyOrders