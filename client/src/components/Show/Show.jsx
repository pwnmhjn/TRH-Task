import React, { useEffect } from 'react'
import ShowCard from '../Reusables/ShowCard'
import { useState } from 'react'
import axios from 'axios'




function Show() {
  const [listing, setListing] = useState([])
  const pathName = document.location.pathname

  const URL = `/api/listings/${pathName}`

  const getdata = () => {
    useEffect(() => {
      async function getListing() {
        const response = await axios.get(URL);
        setListing(response.data)
      }
      getListing()
    },[])
  }

  getdata()


  const list = {
    _id: listing._id,
    title: listing.title,
    price: listing.price,
    description: listing.description,
    country: listing.country,
    location: listing.location,
    image: listing.image
  }



  return (

    <>
      <ShowCard listing={list} />
    </>
  )
}

export default Show