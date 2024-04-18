import express from "express";
const router = express.Router();
import wrapAsync from "../utils/WrapAsync.js";
import {
  postReviews,
  deleteReviews,
} from "../controllers/reviews.controller.js";
import auth from "../middleware/auth.js";

router.post("/:id/reviews", auth, wrapAsync(postReviews));

router.delete("/:id/reviews/:reviewId", auth, wrapAsync(deleteReviews));

export default router;
