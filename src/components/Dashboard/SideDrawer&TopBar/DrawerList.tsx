import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React from "react";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

function DrawerList() {
  return (
    <Box sx={{ width: '100%' }}>
      <Toolbar />
      <Divider />
      <List>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Link href='/' className="mb-4">
            <Image
              alt="Logo"
              src={assets.img.logo}
              height={100}
              width={100}
            />
          </Link>
        </Box>
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
    </Box>
  );
}

export default DrawerList;