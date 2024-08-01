import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import SideDrawerTopBar from '@/components/Dashboard/SideDrawer&TopBar';
import { Metadata } from 'next';

const drawerWidth = 240;

export const metadata: Metadata = {
  title: 'Dashboard - Next Travel Buddy',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#efefef' }}>
      <CssBaseline />
      <SideDrawerTopBar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};