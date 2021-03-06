import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import CustomerOrder from './CustomerOrder'
import Button from 'react-bootstrap/Button'
import {UpcomingJobContainer, HomeHeader, NumColorDark, HomeSectionContainer} from './HomeStyles'

function CustomerOrders({username}) {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getCustomerOrders = async () => {
            try{
            let response = await axios.get(`/api/get/customer-orders/${username}`)
            setOrders(response.data)
            }catch(error){console.log(error)}
        }
        getCustomerOrders()
     },[username])


 
    return (
        <>
            <HomeHeader style={{marginBottom: '0px', borderRadius: '8px 8px 0px 0px'}}><NumColorDark>{orders.length}</NumColorDark> Open Orders</HomeHeader>
            <UpcomingJobContainer>
                <Table borderless hover style={{ backgroundColor: 'white', textAlign: 'center', borderRadius: '0px 0px 8px 8px'}}>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Chef</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {orders.length > 0 ? orders.map((element, index) => 
                        <CustomerOrder key = {index} pending={element.pending} completed = {element.completed} title={element.menuItemTitle} qty={element.qty} orderID = {element._id} chef={element.chefUsername}/>) : <></>} 
                    </tbody>     
                </Table>
            </UpcomingJobContainer>
            <Button variant = 'info' onClick = {() => window.location.href = '/menu'} style ={{marginTop: '10px'}} block>Find Food Near Me</Button>
        </>
    )
}

export default CustomerOrders
