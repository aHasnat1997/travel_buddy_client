'use client';

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ListIcon from '@mui/icons-material/List';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { TUser } from '@/types';

type TList = {
  title: string,
  path: string,
  icon: React.ReactNode
}

export default function DrawerListItems(): TList[] {
  const [currentStoredUser, setCurrentStoredUser] = useState<TUser | null>(null);
  const storedUser = useAppSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    setCurrentStoredUser(storedUser);
  }, [storedUser]);

  const adminList: TList[] = [
    {
      icon: <SpaceDashboardIcon />,
      title: 'Dashboard',
      path: '/dashboard/admin'
    },
    {
      icon: <ConnectingAirportsIcon />,
      title: 'Trip Management',
      path: '/dashboard/admin/trip_management'
    },
    {
      icon: <ChecklistIcon />,
      title: 'Add Trip',
      path: '/dashboard/admin/add_trip'
    },
    {
      icon: <PeopleAltIcon />,
      title: 'User Management',
      path: '/dashboard/admin/user_management'
    }
  ];

  const userList: TList[] = [
    {
      icon: <SpaceDashboardIcon />,
      title: 'Dashboard',
      path: '/dashboard/admin'
    },
    {
      icon: <ConnectingAirportsIcon />,
      title: 'My Trip',
      path: '/dashboard/admin/trip_management'
    },
    {
      icon: <ChecklistIcon />,
      title: 'All Trips',
      path: '/dashboard/admin/add_trip'
    },
    {
      icon: <ListIcon />,
      title: 'My Request',
      path: '/dashboard/admin/user_management'
    }
  ];

  const list = currentStoredUser?.role === 'ADMIN' ? adminList : currentStoredUser?.role === 'USER' ? userList : [];

  return list;
};