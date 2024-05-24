'use client';

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import BiotechIcon from '@mui/icons-material/Biotech';
import Groups2Icon from '@mui/icons-material/Groups2';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { TUser } from '@/types';
import { ConstUserRole } from '@/constant';

type TList = {
  title: string,
  path: string,
  icon: React.ReactNode
}

export default function DrawerListItems(): TList[] {
  const [currentStoredUser, setCurrentStoredUser] = useState<TUser | null>(null);
  const storedUser = useAppSelector((state: RootState) => state.auth.userInfo);
  useEffect(() => {
    setCurrentStoredUser(storedUser);
  }, [storedUser]);

  const admin: TList[] = [
    {
      icon: <SpaceDashboardIcon sx={{ color: '#fff' }} />,
      title: 'Dashboard',
      path: '/dashboard/admin'
    },
    {
      icon: <BiotechIcon sx={{ color: '#fff' }} />,
      title: 'Doctors',
      path: '/dashboard/admin/doctors'
    },
    {
      icon: <AssistWalkerIcon sx={{ color: '#fff' }} />,
      title: 'Patients',
      path: '/dashboard/admin/patients'
    },
    {
      icon: <Groups2Icon sx={{ color: '#fff' }} />,
      title: 'Admins',
      path: '/dashboard/admin/admins'
    }
  ];

  const list = currentStoredUser?.role === ConstUserRole.ADMIN ? admin : [];

  return list;
};