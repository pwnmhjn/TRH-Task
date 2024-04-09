import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Deltebtn({id}) {

    

    function DeleteListing(){
    console.log(id)
    }



  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="delete" size="large" onClick={DeleteListing}>
        <DeleteIcon  fontSize="inherit" />
      </IconButton>
    </Stack>
  );
}