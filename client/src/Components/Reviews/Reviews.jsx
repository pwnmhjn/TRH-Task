import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { CardActions } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useReviewAuth from "../../utils/useReviewAuth";

export default function Review({ review }) {
  const { id } = useParams();
  const AuthorId = useReviewAuth();

  const Delete = () => {
    axios
      .delete(`/api/listings/${id}/reviews/${review._id}`)
      .then((result) => {
        toast.error("Review Delete");
        setTimeout(() => {
          window.location.reload(false);
        }, 500);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card style={{ width: 280, maxHeight: 300, margin: 10, padding: 0 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="red" gutterBottom>
          @{review.author.username}
        </Typography>
        <Typography style={{ height: 50 }}>{review.content}</Typography>
        <Rating name="read-only" value={review.rating} readOnly />
      </CardContent>

      <CardActions>
        {AuthorId == (review.author && review.author._id) && (
          <Button onClick={Delete} variant="outlined" color="error">
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
