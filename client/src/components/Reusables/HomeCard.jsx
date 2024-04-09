import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExploreIcon from '@mui/icons-material/Explore';




export default function RecipeReviewCard({ listing }) {
   
    return (

        <>
        <a style={{textDecoration:"none"}}  href={`/show/${listing._id}`}>
            <Card sx={{ maxWidth: 345  }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <ExploreIcon/>
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
                        <h4>
                        {listing.description}
                        </h4>
                        <h4>
                        &#8377;{listing.price.toLocaleString('en-IN')}/Night
                        </h4>
                    </Typography>
                </CardContent>
                
            </Card>
            </a>
        </>
    );
}