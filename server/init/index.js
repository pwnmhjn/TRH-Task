import { mongoose } from 'mongoose';
import Listing from '../models/listings.js';
import sampleListings from './data.js';

const Mongo_URL = "mongodb://127.0.0.1:27017/wanderland"

const main = async () => {
    mongoose.connect(Mongo_URL)
}
main().then((res) => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("err")
})

const initdata = async ()=>{
await Listing.deleteMany({})
await Listing.insertMany(sampleListings)
}

initdata().then(()=>{
    console.log("data initiated")
}).catch((err)=>{
    console.log(err)
})


