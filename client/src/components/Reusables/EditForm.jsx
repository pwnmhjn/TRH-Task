
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState,useRef } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useParams  } from 'react-router-dom'

export default function EditForm({id}) {
  const [listing, setListing] = useState({
    title: '',
    price: '',
    image: '',
    description: '',
    country: '',
    location: '',
  })

  // const pathName = document.location.pathname;
 
  console.log(id)
  useEffect(() => {
    axios.get(`/api/listings/edit/:${id}`).then(res => {
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

  ;
const changeListing=(event)=>{
  const fieldName = event.target.name
  const fieldValue = event.target.value;
setListing((prev)=>{
  prev[fieldName ]= fieldValue;
  return {...prev}
})
}

const putData =async (event)=>{
 event.preventDefault();
 await  axios.put(`/api/listings/${id}`,listing).then(res=>{
  }).catch(err => console.log(err))
}
  return (
    <form onSubmit={putData}>
      <TextField fullWidth label="Title" name='title' value={listing.title} id="fullWidth" onChange={changeListing}  />
      <TextField fullWidth label="Description" name='description' value={listing.description} onChange={changeListing} id="fullWidth" />
      <TextField fullWidth label="Price" name='price' value={listing.price} id="fullWidth" onChange={changeListing} />
      <TextField fullWidth label="Image" name='image' value={listing.image} id="fullWidth" onChange={changeListing} />
      <TextField fullWidth label="Location" name='location' value={listing.location} id="fullWidth" onChange={changeListing} />
      <TextField fullWidth label="Country" name='country' value={listing.country} id="fullWidth" onChange={changeListing} />
      <button>Submit</button>
    </form>
  );
}
