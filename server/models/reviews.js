import {  mongoose } from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    rating:{
        default:1,
        min:1,
        max:5,
        type:Number,
        set:(e)=>e===""?1:e,
    },
    createdAt:{
        type:Date,
        defaul:Date.now()
    }
})

const Review = mongoose.model("Review",ReviewSchema)

export default Review;