import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function CustomerOrder({title, qty, pending, completed, orderID, chef}) {
    const [isPending, setPending] = useState(pending)



    const confirmDelivery = async(event) => {
        event.preventDefault()

        try{
            await axios.post('/api/post/update-pending-order', {orderID: orderID})
            setPending(false)
        }catch(error){
            console.log(error)
        }
     }

     

    return (
        <>
        <tr>
            <td>{qty} {title}</td>
            <td><a href={`/user/profile?user=${chef}`}>{chef}</a></td>
            <td>{!completed ? <>On Its Way!</> : 
                <> 
                    {isPending ? <Button onClick={confirmDelivery}>Confirm Delivery</Button> : <Button variant="success"> Delivered</Button>}
                </>
                }</td>
        </tr>
        
       
        </>
    )
}

export default CustomerOrder
