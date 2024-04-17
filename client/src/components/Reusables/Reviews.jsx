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

export default function Review({ review }) {
  const { id } = useParams();
  console.log(id);
  console.log(review._id);

  const Delete = () => {
    axios
      .delete(`/api/listings/${id}/reviews/${review._id}`)
      .then((result) => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
    toast.success("review Delete");
  };

  return (
    <Card style={{ width: 280, maxHeight: 300, margin: 10, padding: 0 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Jane Doe
        </Typography>
        <Typography>{review.content}</Typography>
        <Rating name="read-only" value={review.rating} readOnly />
      </CardContent>

      <CardActions>
        <Button onClick={Delete} variant="outlined" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}