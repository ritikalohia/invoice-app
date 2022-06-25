import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      colorWhite: "#ffffff",
      colorGrayishPurple: "#e0e4fb",
      colorGrayishWhite: "#f9f9fb",
      colorGreen: "#34d59d",
      colorRed: "#ec5555",
      colorStrongOrange: "#ff9100",
      colorOrange: "#ff9999",
      colorPurple: "#7b5cfa",
      colorLightPurple: "#9175ff",
      colorDarkPurple: "#7e88c4",
      colorSemiGray: "#888eaf",
      colorDarkGray: "#373b53",
      colorVeryLightBlack: "#252946",
      colorDifVeryLightBlack: "#252946",
      colorLightBlack: "#1e2139",
      colorNearlyBlack: "#141624",
      colorDarkest: "#0d0e17",
      light: '#252946',
      main: "#1e2139",   
      dark: "#141624",
      contrastText: '#fff',
    },
    common: {
      black :"#1e2139",
    },
    background: {
      paper: "#252946" ,
      default: "#252946"
       },
    action:{
      hover: "2px"
    },   
    text: {
      primary:'#fff'
    },
  },

});

export default theme;