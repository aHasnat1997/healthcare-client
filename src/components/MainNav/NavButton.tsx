'use client';

import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import ProfileButton from "./ProfileButton";

function NavButton() {
  const router = useRouter();
  const currentUser = JSON.parse(localStorage.getItem('access-token')!);
  // console.log(currentUser);

  return (
    <Box>
      {
        currentUser ?
          <Box sx={{ cursor: 'pointer' }}>
            <ProfileButton />
          </Box> :
          <Button
            variant="outlined"
            onClick={() => router.push('/login')}
          >
            Login
          </Button>
      }
    </Box>
  );
}

export default NavButton;