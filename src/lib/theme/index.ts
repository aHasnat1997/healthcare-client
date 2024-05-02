'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0075ff'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        sx: {
          padding: '.5rem 2rem'
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
        variant: 'outlined',
        fullWidth: true
      }
    }
  },
  typography: {
    fontFamily: ['Nunito', 'sans'].join(',')
  }
});

export default theme;