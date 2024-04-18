import express from "express";
const router = express.Router();
import wrapAsync from "../utils/WrapAsync.js";
import {
  getAllListings,
  deleteListing,
  putEditListing,
  getListingById,
  postListing,
  getListingByIdForEdit,
} from "../controllers/listings.controller.js";
import auth from "../middleware/auth.js";
// import isOwner from "../middleware/isOwner.js";

router.get("/", wrapAsync(getAllListings));

router.get("/show/:id", wrapAsync(getListingById));

router.post("/", auth, wrapAsync(postListing));
router.get("/edit/:id", wrapAsync(getListingByIdForEdit));
router.put("/:id", auth, wrapAsync(putEditListing));
router.delete("/:id", auth, wrapAsync(deleteListing));

export default router;
