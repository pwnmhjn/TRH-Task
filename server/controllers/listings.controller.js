
import Listing from "../models/listings.js";

const getAllListings = async (req, res) => {
    let data = await Listing.find({});
    res.send(data);
  }

  const getListingById =  async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id).populate('reviews');
    res.send(listing);
  }
  
  const postListing = async (req, res, next) => {
    const listing = req.body;
    const newListing = new Listing(listing);
    const result = await newListing.save();
    res.send(result);
  }
  const getListingByIdForEdit = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    res.send(listing);
  }

  const putEditListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body });
  }

  const deleteListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
  }

  export {getAllListings,deleteListing, putEditListing, getListingById ,postListing,getListingByIdForEdit }