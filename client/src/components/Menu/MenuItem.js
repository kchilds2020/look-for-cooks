import React, {useState, useEffect} from 'react'
import '../../styles/MenuItem.css'
import Order from './Order';
import Button from 'react-bootstrap/Button'
import StarRatings from 'react-star-ratings';
import axios from 'axios'

function MenuItem({title, description, price, chefUsername, picture, itemNum, dbID, shadow, setShadow, user}) {

    const [visible, setVisibility] = useState(false);
    const [reviewAvg, setReviewAvg] = useState(0)

    useEffect(() => {
        axios.get(`/api/get/username/${chefUsername}`)
        .then(response => {
            let reviewArray = response.data.reviews
            console.log(response.data.reviews)
            let sum = 0;
            for(let i = 0; i < reviewArray.length; i++){
                sum += parseFloat(reviewArray[i].rating)
            }
            console.log('REVIEW AVG: ', sum/reviewArray.length)
            setReviewAvg(sum/reviewArray.length)
        })
    }, [chefUsername])

    console.log('USERNAME',user)
    const orderItem = (event) =>{
        event.preventDefault();
        console.log('order!')
        setVisibility(true);
        setShadow(true)
    }
    const cancelItem = (event) => {
        event.preventDefault();
        setVisibility(false)
        setShadow(false)
    }

    return (
        <div className="menu-item-container">
            <div className="menu-photo">
                <img src={`/api/get/image/${picture}`} alt =" " />
            </div>
            <div className = "menu-item-title" id = {`menu-item-title-${itemNum}`}>{title}</div>
            <div className = "menu-item-details">
                
                <div className = "menu-item-rating" id = {`menu-item-title-${itemNum}`}>
                <StarRatings
                    rating={reviewAvg}
                    starDimension="20px"
                    starRatedColor="gold"
                />
                </div>
                <div className = "menu-item-description" id = {`menu-item-description-${itemNum}`}> {description} </div>
                <div className = "menu-item-location" id = {`menu-item-location-${itemNum}`} >{'Mansfield, Texas'} </div>
                <div className = "menu-item-price" id = {`menu-item-price-${itemNum}`}>${price}</div>
                <Button style={{margin: '10px'}} onClick={orderItem}>Order!</Button>
            </div>
               
                {visible ? <Order cancel={cancelItem} price={price} title={title} picture={picture} dbID = {dbID} chefUsername={chefUsername} user={user}/> : <></>}
        </div>
    )
}

export default MenuItem
