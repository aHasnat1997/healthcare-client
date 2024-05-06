import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// type TCurrentUser = {
//   name: string;
//   email: string;
//   image: string | null;
//   role: string,
//   iat: number,
//   exp: number
// };

function ProfileButton() {
  const currentUser = JSON.parse(localStorage.getItem('access-token')!);
  const userNameIcon = currentUser?.name?.split(' ').slice(0, 2).map((item: string[]) => item[0]).join('').toUpperCase();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
        {DrawerList}
      </Drawer>
    </>
  );
}

export default ProfileButton;