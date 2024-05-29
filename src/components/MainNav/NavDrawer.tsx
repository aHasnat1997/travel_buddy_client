'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Container, IconButton, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import assets from '@/assets';
import NavButton from './NavButton';

type TNavContent = {
  title: string;
  path: string;
};
export default function NavDrawer({ navContent }: { navContent: TNavContent[] }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Stack direction='column' spacing='1rem' padding='2rem'>
        {
          navContent.map((item, i) => <Box key={i}>
            <div className="w-fit group">
              <Link href={item.path} className="group-hover:text-primary text-2xl">{item.title}</Link>
              <div className="p-[1px] bg-primary origin-left scale-0 duration-500 group-hover:scale-100"></div>
            </div>
          </Box>)
        }
      </Stack>
    </Box>
  );

  return (
    <Container>
      <Stack justifyContent='space-between' py='1rem'>
        <Stack>
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </Box>
          <Box>
            <Image
              alt="Logo"
              src={assets.img.logo}
              height={120}
              width={150}
            />
          </Box>
        </Stack>
        <NavButton />
      </Stack>
    </Container>
  );
}
