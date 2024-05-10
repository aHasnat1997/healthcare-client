'use client';

import { Box, Typography } from "@mui/material";

export default function HomeTopBar() {
  const currentUser = JSON.parse(localStorage.getItem('access-token')!);
  return (
    <Box sx={{
      bgcolor: 'white',
      padding: '2rem',
      borderRadius: '.5rem'
    }}>
      <Typography
        variant='h5'
        component='h1'
        fontWeight='600'
      >
        <span className="text-secondary">
          Hello, {(currentUser?.name)[0].toUpperCase() + (currentUser?.name).substring(1)}
        </span>
      </Typography>
      <p className="text-secondary/60">Welcome To, Health Care System</p>
    </Box>
  );
};