import axios from "axios";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./ShowCard.css";
import { toast } from "react-toastify";
import useListingAuth from "../../../utils/useListingAuth";
import ListingCard from "./ListingCard";
import { ListingContextProvider } from "../../../Contexts/ListingContext/listingContext";
import ListingBtns from "./ListingBtns";
import useLogin from "../../../utils/useLogin";
import { useState } from "react";
import Review from "../../Reviews/Reviews";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
export default function ShowCard({ listing }) {
  const OwnerId = useListingAuth();
  const Navigate = useNavigate();
  const nav = useLogin();

  const [review, setReview] = useState({
    content: "",
    rating: "",
  });

  const handleReview = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setReview((prev) => {
      prev[fieldName] = fieldValue;
      return { ...prev };
    });
  };

  const postReview = (event) => {
    event.preventDefault();
    axios
      .post(`/api/listings/${listing._id}/reviews`, reviews)
      .then((result) => {
        toast.success("Review created");
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      })
      .catch((err) => {
        Navigate("/login");
        toast.success(err.response.data);
      });
  };

  const delList = () => {
    axios
      .delete(`/api/listings/${listing._id}`)
      .then((res) => {
        toast.error(res.data);
        console.log(res);
        Navigate("/");
      })
      .catch((err) => {
        toast.success(err.response.data);
        Navigate("/login");
      });

    console.log("deleted");
  };

  return (
    <div>
      <ListingContextProvider value={{ delList }}>
        <div className="ShowCard">
          <ListingCard listing={listing} />
          {OwnerId == (listing.owner && listing.owner._id) && <ListingBtns />}
        </div>
      </ListingContextProvider>

      <div className="Reviews" style={{ marginTop: 15 }}>
        <div>
          <form className="ReviewInput" onSubmit={postReview}>
            <TextField
              sx={{
                width: 600,
              }}
              id="outlined-multiline-static"
              label="Reviews"
              required
              // multiline
              onChange={handleReview}
              name="content"
            />
            <div
              style={{
                marginTop: 5,
              }}
            >
              <Rating
                name="rating"
                onChange={handleReview}
                defaultValue={2}
                required
              />
              {nav ? (
                <Button
                  variant="outlined"
                  type="submit"
                  endIcon={<ArrowUpwardIcon />}
                  style={{ width: 100, marginLeft: 120 }}
                >
                  Submit
                </Button>
              ) : (
                <Typography
                  style={{
                    marginLeft: 170,
                    textDecorationLine: "underline",
                    color: "red",
                  }}
                >
                  Must be logged in to post a review{" "}
                </Typography>
              )}
            </div>
          </form>
        </div>

        <div className="ReviewCard">
          {listing.reviews &&
            listing.reviews.map((review) => (
              <div key={review._id}>
                <Review review={review} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
