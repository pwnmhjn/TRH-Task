import { useEffect, useState } from 'react'
// import './App.css'
import axios from 'axios'
// import Header from './components/Header/Header.jsx'
// import Footer from './components/Footer/Footer.jsx'
import RecipeReviewCard from '../Reusables/HomeCard'


function Home() {
  const [listings ,setListings]= useState([])

 useEffect( ()=>{
  ; (async()=>{
    const response = await axios.get("/api/listings")
    setListings(response.data)
   })()
  },[])

 

  return (
   <>
    
    {
      listings.map((listing,index)=>(
        <div key={listing._id} >
            <RecipeReviewCard listing ={listing }/>
        </div>
      ))
    }

   </>
  )


}

export default Home;
export {axios}