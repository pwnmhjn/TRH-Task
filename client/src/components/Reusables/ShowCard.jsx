import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Button from "@mui/material/Button";

// import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import "./ShowCard.css";

export default function ShowCard({ listing }) {
  const Navigate = useNavigate();
  const Delete = () => {
    axios
      .delete(`/api/listings/${listing._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    Navigate("/");
  };

  return (
    <div className="ShowCard">
      <Card sx={{ maxWidth: 600, height: 550 }}>
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
              <Typography>{listing.description}</Typography>
              <Typography> &#8377; {listing.price}/Night</Typography>
              <Typography>{listing.location}</Typography>
              <Typography>{listing.country}</Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
        <div direction="row" spacing={2} className="Btns">
          <Button variant="outlined" endIcon={<DeleteIcon />} onClick={Delete}>
            Delete
          </Button>
          <Button
            variant="outlined"
            endIcon={<EditIcon />}
            onClick={() => {
              Navigate(`/show/${listing._id}/edit`);
            }}
          >
            Edit
          </Button>
        </div>
      </Card>
    </div>
  );
}
