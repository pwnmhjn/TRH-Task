import express from "express";
const router = express.Router();
import wrapAsync from "../utils/WrapAsync.js";
import {
  postReviews,
  deleteReviews,
} from "../controllers/reviews.controller.js";

router.post("/:id/reviews", wrapAsync(postReviews));

router.delete("/:id/reviews/:reviewId", wrapAsync(deleteReviews));

export default router;
