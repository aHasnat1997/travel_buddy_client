'use client';

import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { TUser } from "@/types";

function NavButton() {
  const router = useRouter();
  const [currentStoredUser, setCurrentStoredUser] = useState<TUser | null>(null);
  const storedUser = useAppSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    setCurrentStoredUser(storedUser);
  }, [storedUser]);

  const userNameIcon = currentStoredUser?.name?.split(' ').slice(0, 2).map((item: string) => item[0]).join('').toUpperCase();

  return (
    <Box>
      {
        currentStoredUser ?
          <Link href='/dashboard'>
            <IconButton sx={{}}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                {userNameIcon}
              </Avatar>
            </IconButton>
          </Link> :
          <Button
            color="secondary"
            onClick={() => router.push('/login')}
            sx={{ color: '#fff' }}
          >
            Login
          </Button>
      }
    </Box>
  );
}

export default NavButton;