import express from "express";
const router = express.Router();
import wrapAsync from "../utils/WrapAsync.js";
import { getAllListings,deleteListing,putEditListing,getListingById,postListing,getListingByIdForEdit  } from "../controllers/listings.controller.js";


router.get(
    "/",
    wrapAsync(getAllListings)
  );

  router.get(
    "/show/:id",
    wrapAsync(getListingById)
  );

  router.post(
    "/",
    wrapAsync(postListing)
  );
  router.get(
    "/edit/:id",
    wrapAsync(getListingByIdForEdit)
  );
  router.put(
    "/:id",
    wrapAsync(putEditListing)
  );
  router.delete(
    "/:id",
    wrapAsync(deleteListing)
  );

export default router;