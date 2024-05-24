'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

type THCDialog = {
  button: React.ReactNode,
  title: string,
  contentText?: string,
  dispatchFun?: Function
  actionBtn?: boolean
}
export default function AlertsDialog({
  button,
  title,
  contentText = '',
  dispatchFun,
  actionBtn = true
}: THCDialog) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box onClick={handleClickOpen}>
        {button}
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {contentText}
          </DialogContentText>
        </DialogContent>
        {
          actionBtn ? <DialogActions>
            <Button
              variant='outlined'
              color="secondary"
              autoFocus
              onClick={handleClose}
              sx={{ color: 'secondary.main' }}
            >
              Cancel
            </Button>
            {
              dispatchFun ? <Button
                onClick={() => {
                  handleClose();
                  dispatchFun();
                }}
                autoFocus
              >
                Agree
              </Button> : <></>
            }
          </DialogActions> : <></>
        }
      </Dialog>
    </React.Fragment>
  );
};