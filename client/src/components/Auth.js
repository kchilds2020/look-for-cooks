import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'


function Auth({authenticated,setAuthentication, setIdentification, setFirstname, setLastname, setUsername, setEmail, identification, setCookDescription, setCook, setCookSpecialty, setCookPrice, setPicture, setPhotos, setMenuItems, username}) {

useEffect(() => {
    axios.get('/get-session')
    .then(response => {
        if(response.data !== 'undefined'){
            console.log('AUTHENTICATION',response.data);
            setIdentification(response.data);
            setAuthentication(true);
        }
    })
    .catch(err => console.log(err))

    if(identification !== ''){
        axios.get(`/api/get/userId/${identification}`)
        .then(response => {
            setFirstname(response.data.firstName)
            setLastname(response.data.lastName)
            setUsername(response.data.username)
            setEmail(response.data.email)
            setCookDescription(response.data.cookDescription)
            setCook(response.data.cook)
            setCookSpecialty(response.data.cookSpecialty)
            setCookPrice(response.data.cookPrice)
            setPicture(response.data.picture)
            setPhotos(response.data.photos)
        })
        .catch(err => console.log(err))

        axios.get(`/api/get/menu-items/${username}`)
        .then(response => setMenuItems(response.data))
        .catch(err => console.log(err))
    }

}, [setAuthentication, setIdentification, identification, setFirstname, setLastname, setUsername, setEmail, setCook, setCookDescription, setCookPrice, setCookSpecialty, setPicture, setPhotos, setMenuItems, username])


return(
    
    authenticated === true ? <Redirect to={{pathname: `/home`}}/> : <Redirect to={{pathname: "/"}}/>
);

}


export default Auth