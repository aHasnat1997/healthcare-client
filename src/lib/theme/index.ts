'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#36c95f'
    },
    secondary: {
      main: '#263452'
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