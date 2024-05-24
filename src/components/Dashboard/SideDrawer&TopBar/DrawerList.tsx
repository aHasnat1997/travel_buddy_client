import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import DrawerListItems from "./DrawerListItems";
import { usePathname } from "next/navigation";

function DrawerList() {
  const pathname = usePathname();

  return (
    <Box sx={{ width: '100%', height: '100%', bgcolor: 'secondary.main', color: 'white' }}>
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
        {DrawerListItems().map((list, i) => (
          <Link
            key={i}
            href={list.path}
          >
            <ListItem disablePadding className={list.path === pathname ? 'bg-primary/5' : ''}>
              <Box
                sx={
                  list.path === pathname ?
                    { bgcolor: 'primary.main', padding: '4px', height: '3rem' } :
                    { padding: '4px' }
                } />
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