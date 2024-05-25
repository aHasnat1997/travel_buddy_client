'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1ec28b'
    },
    secondary: {
      main: '#ff8900'
    },
    text: {
      primary: '#2b2945'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        sx: {
          padding: '.5rem 2rem',
          color: 'white'
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        sx: {
          border: '.5px solid'
        }
      }
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg'
      }
    },
    MuiStack: {
      defaultProps: {
        direction: 'row'
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
        fullWidth: true
      }
    },
    MuiTypography: {
      defaultProps: {
        color: '#5f7172'
      }
    }
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  }
});

export default theme;