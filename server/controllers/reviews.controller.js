import Listing from "../models/listings.js";
import Review from "../models/reviews.js";

const postReviews = async (req, res) => {
  const { id } = req.params;
  const reviewData = req.body;
  const listing = await Listing.findById(id);
  const newReview = new Review(reviewData);
  listing.reviews.push(newReview);
  const review = await newReview.save();
  await listing.save();
  res.send(review);
};

const deleteReviews = async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  res.send("Review Deleted");
};

export { postReviews, deleteReviews };
