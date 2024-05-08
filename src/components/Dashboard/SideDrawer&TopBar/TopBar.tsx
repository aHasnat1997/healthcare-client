import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type TTopBarPayload = {
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: any
};
export default function TopBar({ isClosing, setMobileOpen, mobileOpen }: TTopBarPayload) {
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
        zIndex: (theme) => theme.zIndex.drawer + 1,
        width: '100%'
        // width: { sm: `calc(100% - ${drawerWidth}px)` },
        // ml: { sm: `${drawerWidth}px` },
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
        <Stack justifyContent='space-between' width='100%'>
          <Box>
            <Typography variant='h5' component='h1'>{currentUser?.name}</Typography>
            <Typography component='p'>Welcome To, Health Care System</Typography>
          </Box>
          <Button
            color="error"
            onClick={handelLogout}
          >
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};