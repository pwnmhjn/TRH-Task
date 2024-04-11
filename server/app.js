// const express = require("express")
import express from 'express'
import { mongoose } from 'mongoose';
import bodyParser from 'body-parser'
import Listing from './models/listings.js'

const app = express();
const port = process.env.PORT || 3000;
const Mongo_URL = "mongodb://127.0.0.1:27017/wanderland"

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const main = async ()=>{
  mongoose.connect(Mongo_URL)
}

main().then(()=>{
  console.log("Connected to MongoDB")
}).catch((err)=>{
  console.log(err)
})

app.get("/api/listings",async(req,res)=>{
  let data = await Listing.find({})
res.send(data)
})
app.get("/api/listings/show/:id",async(req,res)=>{
  const {id} = req.params
  let listing = await Listing.findById(id)
  res.send(listing)
  
})

app.get("/api/listings/edit/:id",async(req,res)=>{
  const {id} = req.params
  let listing = await Listing.findById(id)
  res.send(listing) 
} )


app.post('/api/listings',async (req, res) => {
  const listing = req.body
  const newLisitng = await new Listing(listing)
  res.send(newLisitng)
  newLisitng.save()
});


app.put("/api/listings/:id", async(req,res)=>{
const {id} = req.params;
 await Listing.findByIdAndUpdate(id,{...req.body})
res.send("data saved")

})

app.delete("/api/listings/:id",async(req,res)=>{
  const{id} = req.params
  const delList = await Listing.findByIdAndDelete(id)
  console.log(delList)
  
 
})

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}/api/listings`)
})