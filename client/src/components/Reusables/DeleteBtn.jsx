import * as React from 'react';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Deltebtn({id}) {

 const nevigate = useNavigate()
  const DeleteListing =()=>{
    axios.delete(`/api/listings/${id}`).then(res=>console.log(res)).catch(err=> console.log(err))
   nevigate('/')
    }
  
   

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
       <Button variant="outlined"onClick={DeleteListing} startIcon={<DeleteIcon />}  >
        Delete
      </Button>
    </Stack>
  );
}