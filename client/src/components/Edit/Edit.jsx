import React from 'react'
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

function Edit() {
  const [listing, setListing] = useState({
    title: '',
    price: '',
    image: '',
    description: '',
    country: '',
    location: '',
  })
  const navigate = useNavigate()
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/api/listings/edit/${id}`).then(res => {
      setListing({
        ...listing,
        title: res.data.title,
        price: res.data.price,
        image: res.data.image,
        description: res.data.description,
        country: res.data.country,
        location: res.data.location
      })
    })

  }, [id])

  const changeListing = (event) => {
    const fieldName = event.target.name
    const fieldValue = event.target.value;
    setListing((prev) => {
      prev[fieldName] = fieldValue;
      return { ...prev }
    })
  }



  const putData = async (event) => {
    event.preventDefault()
    await axios.put(`/api/listings/${id}`, listing).then(res => {
      console.log(res.data)
    }).catch(err => console.log(err))
    navigate('/')

  }

  return (
    <form>
      <TextField fullWidth label="Title" name='title' value={listing.title} id="fullWidth" onChange={changeListing} />
      <TextField fullWidth label="Description" name='description' value={listing.description} onChange={changeListing} id="fullWidth" />
      <TextField fullWidth label="Price" name='price' value={listing.price} id="fullWidth" onChange={changeListing} />
      <TextField fullWidth label="Image" name='image' value={listing.image} id="fullWidth" onChange={changeListing} />
      <TextField fullWidth label="Location" name='location' value={listing.location} id="fullWidth" onChange={changeListing} />
      <TextField fullWidth label="Country" name='country' value={listing.country} id="fullWidth" onChange={changeListing} />
      <Button variant="contained" onClick={putData}  size="large">Submit</Button>
    </form>
  )
}

export default Edit