import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Deltebtn from './DeleteBtn';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';




export default function ShowCard({ listing }) {
  const Navigate = useNavigate()
  return (
    <div className='ShowCard'>
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={listing.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {listing.title}
            </Typography>
            <Typography variant="body2" component="div" color="text.primary">
              <h4>{listing.description}</h4>
              <h4> &#8377; {listing.price}/Night</h4>
              <h5>{listing.location}</h5>
              <h5>{listing.country}</h5>
            </Typography>
          </CardContent>
        </CardActionArea>
        <Stack direction="row" spacing={2}>
          <Deltebtn id={listing._id} />
          <Button variant="outlined" endIcon={<EditIcon />} onClick={() => {
            Navigate(`/edit/${listing._id}`)
          }} >Edit</Button>
        </Stack>
      </Card>
    </div>
  );
}
