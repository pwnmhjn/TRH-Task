import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import axios from "axios";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Review from "./Reviews";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import "./ShowCard.css";
import { toast } from "react-toastify";
import useLogin from "../../utils/useLogin";
import useListingAuth from "../../utils/useListingAuth";


export default function ShowCard({ listing }) {
  const nav = useLogin()
  const OwnerId = useListingAuth()
  
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
  const Navigate = useNavigate();

  const postReview = (event) => {
    event.preventDefault();
    axios
      .post(`/api/listings/${listing._id}/reviews`, review)
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

  const Delete = () => {
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
  };


  return (
    <div>
      <div className="ShowCard">
        <Card sx={{ maxWidth: 600, minWidth: 600, height: 550 }}>
          <CardActionArea content="div">
            <CardMedia
              component="img"
              height="300"
              image={listing.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {listing.title}
              </Typography>
              <Typography variant="body2" component="div" color="text.primary">
                <Typography  variant="p" style={{ color: "red",textDecoration:"underline" }}>
                  @{listing.owner && listing.owner.username} <br />
                </Typography>
                <Typography sx={{mb:1 ,mt:1}} >{listing.description}</Typography>
                <Typography sx={{mb:1}}  > &#8377; {listing.price}/Night</Typography>
                <Typography>{listing.location}</Typography>
                <Typography>{listing.country}</Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
       { OwnerId ==  ( listing.owner && listing.owner._id) &&
       <div direction="row" className="btns" spacing={2} m={5}>
       <Button
         variant="outlined"
         sx={{ margin: 2 }}
         endIcon={<DeleteIcon />}
         onClick={Delete}
       >
         Delete
       </Button>
       <Button
         variant="outlined"
         sx={{ margin: 2 }}
         endIcon={<EditIcon />}
         onClick={() => {
           Navigate(`/show/${listing._id}/edit`);
         }}
       >
         Edit
       </Button>
   </div>
       } 
        



      </div>
      <div className="Reviews" style={{marginTop:15}} >
        <div >
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
              {

                nav ? <Button
                  variant="outlined"
                  type="submit"
                  endIcon={<ArrowUpwardIcon />}
                  style={{ width: 100, marginLeft: 120 }}
                >
                  Submit
                </Button> : <Typography style={{ marginLeft: 170, textDecorationLine: "underline", color: "red" }}>Must be logged in to post a review  </Typography>
              }

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
