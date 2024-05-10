import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import DrawerListItems from "./DrawerListItems";

function DrawerList() {
  const navList = DrawerListItems();

  return (
    <Box sx={{ width: '100%', height: '100%', bgcolor: 'primary.main', color: 'white' }}>
      {/* <Toolbar /> */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Link href='/' className="m-4">
          <Image
            alt="Logo"
            src={assets.img.logoW}
            height={150}
            width={150}
          />
        </Link>
      </Box>
      {/* <Divider /> */}
      <List>
        {navList.map((list, i) => (
          <Link key={i} href={list.path}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {list.icon}
                </ListItemIcon>
                <ListItemText primary={list.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
}

export default DrawerList;