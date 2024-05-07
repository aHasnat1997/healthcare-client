'use client';

import { Avatar, Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { useState } from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Link from "next/link";

// type TCurrentUser = {
//   name: string;
//   email: string;
//   image: string | null;
//   role: string,
//   iat: number,
//   exp: number
// };

function ProfileButton() {
  const router = useRouter();
  const currentUser = JSON.parse(localStorage.getItem('access-token')!);
  const userNameIcon = currentUser?.name?.split(' ').slice(0, 2).map((item: string[]) => item[0]).join('').toUpperCase();

  type TUserNaveList = {
    title: string,
    path: string,
    icon: React.ReactNode
  };
  const userNavList: TUserNaveList[] = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <SpaceDashboardIcon />
    }
  ];

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  function handelLogout() {
    localStorage.removeItem('access-token');
    router.refresh();
    toast.error('User Logout');
  };


  return (
    <>
      <Box onClick={toggleDrawer(true)}>
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
      </Box>
      <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, height: '100vh' }} onClick={toggleDrawer(false)}>
          <Stack sx={{ width: '100%', height: '100%' }} direction='column' justifyContent='space-between'>
            <Box>
              <List>
                {userNavList.map((item, index) => (
                  <Link href={item.path} key={index}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
            <Box>
              <Button
                color="error"
                fullWidth={true}
                onClick={handelLogout}
              >
                Logout
              </Button>
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default ProfileButton;