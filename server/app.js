// const express = require("express")
import express from 'express'
import { mongoose } from 'mongoose';
import Listing from './models/listings.js';

const app = express();
const port = process.env.PORT || 3000;
const Mongo_URL = "mongodb://127.0.0.1:27017/wanderland"

app.use(express.urlencoded({ extended: true }));

const main = async ()=>{
  mongoose.connect(Mongo_URL)
}

main().then((res)=>{
  console.log("Connected to MongoDB")
}).catch((err)=>{
  console.log("err")
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

app.post("/api/listings",async (req,res)=>{
  console.log(req.body)
  res.send(req.body)
} )
 




app.listen(port,()=>{
    console.log(`server at http://localhost:${port}/api/listings`)
})