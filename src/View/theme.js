import { createTheme } from "@mui/material";
export const theme = createTheme({
    palette:{
        primary:{
            main: "#34A77F",
        } 
    },

    typography: {
        fontFamily: [
            'Poppins',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
})