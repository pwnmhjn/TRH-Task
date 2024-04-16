import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import ExploreIcon from "@mui/icons-material/Explore";

export default function RecipeReviewCard({ listing }) {
  return (
    <Card sx={{ maxWidth: 345, height: 450, mt: 3 }}>
      <a style={{ textDecoration: "none" }} href={`/show/${listing._id}`}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              <ExploreIcon />
            </Avatar>
          }
          title={listing.title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="250"
          image={listing.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" component="div" color="text.secondary">
            <h4>{listing.description}</h4>
            <br />
            <h4>&#8377;{listing.price.toLocaleString("en-IN")}/Night</h4>
          </Typography>
        </CardContent>
      </a>
    </Card>
  );
}
