import React, { useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useLogin from "../../utils/useLogin";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Btn from "../../Reusable/Button";

function ReviewForm({ listing }) {
  // ------------------------------
  const Navigate = useNavigate();
  const nav = useLogin();
  // --------------------------------

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

    if (review) {
      axios
        .post(`/api/listings/${listing._id}/reviews`, review)
        .then((result) => {
          toast.success("Review created");
          setTimeout(() => {
            window.location.reload(false);
            Navigate(`/show/${listing._id}`);
          }, 500);
        })
        .catch((err) => {
          Navigate("/login");
          toast.success(err.response.data);
        });
    } else {
      console.log("enter review");
    }
  };

  return (
    <>
      <form className="ReviewInput" onSubmit={postReview}>
        <TextField
          sx={{
            width: 600,
          }}
          id="outlined-multiline-static"
          label="Reviews"
          required
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
            <Btn
              // func={postReview}
              variant="outlined"
              icon={<ArrowUpwardIcon />}
              name="Submit"
              type="submit"
              style={{ marginLeft: 120, width: 120 }}
            />
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
    </>
  );
}

export default ReviewForm;
