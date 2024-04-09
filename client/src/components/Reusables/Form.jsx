import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import axios from 'axios'

export default function Form() {
    const [listing, setListing] = useState({
        title: '',
        description: '',
        price: '',
        image: '',
        country: '',
        location: '',
    })
    const handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value

        setListing((currListing) => {
            currListing[fieldName] = fieldValue;
            return { ...currListing }
        })
    }

    const submitListing = () => {
        console.log(listing)
        ;(async()=>{
          const response = await  axios.post("/api/listings", {
            _id:listing._id,
            title:listing.title,
            price:listing.price,
            description:listing.description,
            country:listing.country,
            location:listing.location
          } )
          console.log(response.data)
        })()
        
    }


    return (
        <Box
            component="form"
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <TextField fullWidth label="Enter Title" onChange={handleChange} name='title' value={listing.title} id="fullWidth" /><br />
            <TextField fullWidth label="Description" onChange={handleChange} name='description' value={listing.description} id="fullWidth" /><br />
            <TextField fullWidth label="Enter Price" onChange={handleChange} name='price' value={listing.price} id="fullWidth" /><br />
            <TextField fullWidth label="Enter Image URL" onChange={handleChange} name='image' value={listing.image} id="fullWidth" /><br />
            <TextField fullWidth label="Enter Location" onChange={handleChange} name='location' value={listing.location} id="fullWidth" /><br />
            <TextField fullWidth label="Enter Country" onChange={handleChange} name='country' value={listing.country} id="fullWidth" /><br />
            <Button onClick={submitListing} variant="contained" >Submit</Button>
        </Box>
    );
}