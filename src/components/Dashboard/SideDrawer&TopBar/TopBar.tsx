import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import AlertsDialog from "@/components/Ui/AlertsDialog";
import { useAppDispatch } from "@/redux/hooks";
import { removeUserInfo } from "@/redux/slices/authSlice";

type TTopBarPayload = {
  drawerWidth: number;
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: any
};
export default function TopBar({ drawerWidth, isClosing, setMobileOpen, mobileOpen }: TTopBarPayload) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  function handelLogout() {
    dispatch(removeUserInfo())
    router.refresh();
    router.push('/');
    toast.error('User Logout');
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: 'white',
        color: 'black'
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Stack justifyContent='space-between' alignItems='center' width='100%'>
          <Box>
            <Typography
              variant='h5'
              component='h1'
              fontWeight='600'
              color='secondary.main'
            >
              Dashboard
            </Typography>
          </Box>
          <Stack gap='1rem'>
            <IconButton
              color="secondary"
              size="small"
            >
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton
              size="small"
              color="error"
            >
              <AlertsDialog
                button={<LogoutIcon />}
                title="Are you want to logout?"
                contentText="If you want to logout then press 'Agree' or 'Cancel' for cancel."
                dispatchFun={handelLogout}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};