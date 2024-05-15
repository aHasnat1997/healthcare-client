'use client';

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Box, Typography } from "@mui/material";

export default function HomeTopBar() {
  const currentUser = localStorage.getItem('persist:userInfo');
  const currentStoredUser = useAppSelector((state: RootState) => state.auth.userInfo);
  return (
    currentStoredUser ? <Box sx={{
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
          Hello, {(currentStoredUser?.name as string)[0].toUpperCase() + (currentStoredUser?.name as string).substring(1)}
        </span>
      </Typography>
      <p className="text-secondary/60">Welcome To, Health Care System</p>
    </Box> : <></>
  );
};