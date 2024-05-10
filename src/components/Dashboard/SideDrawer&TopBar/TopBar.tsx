import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type TTopBarPayload = {
  drawerWidth: number;
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: any
};
export default function TopBar({ drawerWidth, isClosing, setMobileOpen, mobileOpen }: TTopBarPayload) {
  const router = useRouter();
  const currentUser = JSON.parse(localStorage.getItem('access-token')!);
  // console.log(currentUser);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  function handelLogout() {
    localStorage.removeItem('access-token');
    router.refresh();
    router.push('/');
    toast.error('User Logout');
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: 'white',
        color: 'black',
        padding: '.5rem 0'
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Stack justifyContent='space-between' alignItems='center' width='100%'>
          <Box>
            <Typography
              variant='h5'
              component='h1'
              fontWeight='600'
              color='secondary.main'
            >
              Dashboard
            </Typography>
          </Box>
          <Stack gap='1rem'>
            <IconButton
              color="secondary"
              size="small"
            >
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton
              size="small"
              color="error"
              onClick={handelLogout}
            >
              <LogoutIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};