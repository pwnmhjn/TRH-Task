import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';


export default function EditBtn() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      
      <IconButton aria-label="delete" size="large">
        <EditIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
}