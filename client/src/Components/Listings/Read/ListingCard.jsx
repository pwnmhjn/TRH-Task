import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

function ListingCard({ listing }) {
  return (
    <>
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
              <Typography
                variant="p"
                style={{ color: "red", textDecoration: "underline" }}
              >
                @{listing.owner && listing.owner.username} <br />
              </Typography>
              <Typography sx={{ mb: 1, mt: 1 }}>
                {listing.description}
              </Typography>
              <Typography sx={{ mb: 1 }}>
                {" "}
                &#8377; {listing.price}/Night
              </Typography>
              <Typography>{listing.location}</Typography>
              <Typography>{listing.country}</Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default ListingCard;
