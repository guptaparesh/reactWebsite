import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar'
import {Typography} from '@material-ui/core'; 
import Footer from './components/Footer'
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles()

  return (
    <ThemeProvider theme={theme}>
       <NavBar/>
       <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             I am passionate about nature.
          </Typography>        
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
    </ThemeProvider>    
  );
}

export default App;
