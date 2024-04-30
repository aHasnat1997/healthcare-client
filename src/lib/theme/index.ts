"use client";

import { createTheme } from "@mui/material/styles";

const font = '"Nunito", "sans"';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0075ff'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained'
      }
    }
  },
  typography: {
    fontFamily: font
  }
});

export default theme;