'use client';

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { TUser } from "@/types";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function HomeTopBar() {
  const [currentStoredUser, setCurrentStoredUser] = useState<TUser | null>(null);
  const storedUser = useAppSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    setCurrentStoredUser(storedUser);
  }, [storedUser]);

  return (
    currentStoredUser ? <Box sx={{
      bgcolor: 'white',
      padding: '2rem',
      borderRadius: '.5rem'
    }}>
      <Typography
        variant='h5'
        component='h1'
        fontWeight='600'
      >
        <span>
          Hello, {(currentStoredUser?.name as string)[0].toUpperCase() + (currentStoredUser?.name as string).substring(1)}
        </span>
      </Typography>
      <Typography>Welcome To, Your next travel buddy.</Typography>
    </Box> : <></>
  );
};