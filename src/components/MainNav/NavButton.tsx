'use client';

import { Avatar, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

function NavButton() {
  const router = useRouter();
  const currentUser = JSON.parse(localStorage.getItem('access-token')!);
  const userNameIcon = currentUser?.name?.split(' ').slice(0, 2).map((item: string[]) => item[0]).join('').toUpperCase();

  return (
    <Box>
      {
        currentUser ?
          <Box sx={{ cursor: 'pointer' }}>
            <Link href='/dashboard'>
              {
                currentUser?.image ?
                  <Avatar
                    alt="User Profile"
                    src={currentUser?.image}
                  /> :
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    {userNameIcon}
                  </Avatar>
              }
            </Link>
          </Box> :
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => router.push('/login')}
            sx={{ color: 'secondary.main' }}
          >
            Login
          </Button>
      }
    </Box>
  );
}

export default NavButton;