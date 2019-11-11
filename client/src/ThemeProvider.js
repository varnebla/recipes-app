import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: amber[300],
      main: amber['A700'],
      dark: amber[700],
      contrastText: '#000'
    },
    secondary: {
      light: grey[300],
      main: grey[700],
      dark: grey[700],
      contrastText: '#fff'
    },
  },
  typography:{
    fontFamily:[
      '"Quicksand"',
      'sans-serif'
    ].join(',')
  }
});

export default theme;