import Listing from "../models/listings.js";
import Review from "../models/reviews.js";
import JWT from "jsonwebtoken";

const postReviews = async (req, res) => {
  const { token } = req.cookies;
  const decode = JWT.verify(token, "pwnmhjn");
  req.user = decode;
  const { id } = req.params;
  const reviewData = {
    content: req.body.content,
    rating: req.body.rating,
    author: req.user.id,
  };
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
