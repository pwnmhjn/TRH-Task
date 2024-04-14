// const express = require("express")
import express from "express";
import { mongoose } from "mongoose";
// import bodyParser from "body-parser";
import Listing from "./models/listings.js";
import ExpressError from "./utils/ExpressError.js";
import wrapAsync from "./utils/WrapAsync.js";
const app = express();
const port = process.env.PORT || 3000;
const Mongo_URL = "mongodb://127.0.0.1:27017/wanderland";
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const main = async () => {
  mongoose.connect(Mongo_URL);
};

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//show data on home
app.get(
  "/api/listings",
  wrapAsync(async (req, res) => {
    let data = await Listing.find({});
    res.send(data);
  })
);

//show data on show page
app.get(
  "/api/listings/show/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    res.send(listing);
  })
);

//Create data route
app.post(
  "/api/listings",
  wrapAsync(async (req, res, next) => {
    const listing = req.body;
    const newListing = new Listing(listing);
    const result = await newListing.save();
    res.send(result);
  })
);

//show data on edit page
app.get(
  "/api/listings/edit/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    res.send(listing);
  })
);

//Update data route
app.put(
  "/api/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body });
  })
);

//destroy data route
app.delete(
  "/api/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
  })
);

// app.use("*", (err, req, res, next) => {
//   next(new ExpressError(404, "page not found"));
// });

app.use((error, req, res, next) => {
  const { status = 500, message = "something went wrong" } = error;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}/api/listings`);
});
