import { mongoose } from "mongoose";
const Schema = mongoose.Schema;

const listingShema = Schema({
    title:String,
    description:String,
    image:{
        default:"https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type:String,
        set:(v) => v === " "?"https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,
            },
    price:Number,
    location:String,
    country:String,
})

const Listing = mongoose.model("Listing",listingShema)

export default Listing;