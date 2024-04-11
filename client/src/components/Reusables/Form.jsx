
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState  } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Form() {
    const nevigate = useNavigate()
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
    axios.post("/api/listings",  listing ).then((result) => {
            console.log(result.data)
            nevigate("/")
        }).catch((err) => {
            console.log(err)
        })
    }




    return (
  
        <>
            <TextField  label="Enter Title" onChange={handleChange} name='title' value={listing.title} className='Inputs'  />
            <TextField  label="Description" onChange={handleChange} name='description' value={listing.description}className='Inputs'   />
            <TextField  label="Enter Price" onChange={handleChange} name='price' value={listing.price} className='Inputs'  />
            <TextField label="Enter Image URL" onChange={handleChange} name='image' value={listing.image} className='Inputs'  />
            <TextField  label="Enter Location" onChange={handleChange} name='location' value={listing.location} className='Inputs'  />
            <TextField  label="Enter Country" onChange={handleChange} name='country' value={listing.country} className='Inputs'  />
            <Button onClick={submitListing} variant="contained" size='large' color="success"> Submit</Button>
        </>
    );
}