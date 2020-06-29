import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


function MyOrderItem({orderNum, title, quantity, address, complete, orderID}) {
    const [delivered, setDelivered] = useState(complete)
    const city = "Arlington"
    const state = "Texas"
    const street = "3617 Prather Ct"
    const streetFormatted = street.replace(" ", "+")
    const handleClick = async (event) => {
        event.preventDefault();
        try{
            let orderData = {
                orderID: orderID
            }
            let response= await axios.post('/api/post/complete-order',orderData )
            delivered ? setDelivered(false) : setDelivered(true)
            console.log(delivered, response.data)
        }catch(error){
            alert(`try catch error: ${error}`)
        }
        
    }
    return (
                <tr>
                    <td>{quantity} {title}{quantity > 1 ? "s" : ""}</td>
                    <td><a href={`https://www.google.com/maps/place/${streetFormatted}+${city}+${state}`} target="_blank" rel="noopener noreferrer">{street} {city} {state}</a></td>
                    <td>
                        {delivered ? <Button variant="primary" >Delivered</Button> : <Button variant="secondary" onClick={handleClick}>Incomplete</Button>}
                    </td>
                </tr>
    )
}

export default MyOrderItem