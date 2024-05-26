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
    <Box sx={{ width: '100%', height: '100%', bgcolor: '#b1f3dd', color: 'white' }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Link href='/' className="m-4">
          <Image
            alt="Logo"
            src={assets.img.logo}
            height={200}
            width={200}
          />
        </Link>
      </Box>
      <List>
        {DrawerListItems().map((list, i) => (
          <Link
            key={i}
            href={list.path}
          >
            <ListItem disablePadding className={list.path === pathname ? 'bg-primary/20' : ''}>
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