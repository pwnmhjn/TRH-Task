
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

export default function EditBtn({id}) {
  const navigate = useNavigate()
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
    <Button variant="contained" onClick={()=>{
      navigate(`/listings/${id}`)
    }} endIcon={<EditIcon />}>
        Edit
      </Button>
    </Stack>
  );
}