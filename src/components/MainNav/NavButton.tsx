'use client';

import { Avatar, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

function NavButton() {
  const router = useRouter();
  // problem
  const currentUser = localStorage.getItem('persist:userInfo');
  const currentStoredUser = useAppSelector((state: RootState) => state.auth.userInfo);
  const userNameIcon = currentStoredUser?.name?.split(' ').slice(0, 2).map((item: string) => item[0]).join('').toUpperCase();
  // console.log(currentUser);

  return (
    <Box>
      {
        currentStoredUser ?
          <Box>
            <Link href='/dashboard'>
              {
                currentStoredUser?.image ?
                  <Avatar
                    alt="User Profile"
                    src={currentStoredUser?.image}
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