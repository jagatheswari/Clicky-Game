import React,{Component}from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import './Navbar.css'
// import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   link: {
//     margin: theme.spacing(1),
//   },
// }));
class Navbar extends Component{
  // classes = useStyles();
  render(){
    return (
    <>
    <div id ="navbar">
    <AppBar position="static">
      <Grid container textAlign="center">
        <Grid item xs={4}>
          <Link color="inherit" variant="h5">Clicky Game</Link>
        </Grid>
        <Grid item xs={4}>
          <h4 color="inherit">Click an Image to begin</h4>
        </Grid>
        <Grid item xs={4}>
          <h4 color="inherit">Score:0|Top Score:0</h4>
        </Grid>
      </Grid>
    </AppBar>  
    </div>
    </>
    )
  }
}
export default Navbar;
