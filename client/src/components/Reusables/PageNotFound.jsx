import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function Error() {
  const Navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: "white"
      }}
    >
      <Typography variant="h1" style={{ color: 'red' }}>
        404
      </Typography>
      <Typography variant="h4" style={{ color: 'black' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" style={{margin:10}} onClick={()=>Navigate("/")}>Back Home</Button>
    </Box>
  );
}