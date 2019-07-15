// import React, {Component} from 'react';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
// import ButtonBase from '@material-ui/core/ButtonBase';
import CssBaseline from '@material-ui/core/CssBaseline'
// import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { textAlign } from '@material-ui/system';
import "./Images.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  // img: {
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  // },
}));

// export default class SimpleContainer extends Component {
//   render(){
  
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
//         {images.map(image =>{ image})}
//       </Container>
//     </React.Fragment>
//   );
//   }
// }
const imageElement = props => (
	<div 
	className="imageele col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3" 
	// key={props.id}
	// onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img 
		id={props.name}
		src={props.image}
		alt={props.name}
		/>
	</div>
)

const Character = props => (
  <div className="card" onClick={e => props.clickEvent(e.target.src)}>
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);


function Images(props) {
  const {images} = props
  console.log(images)
  const classes = useStyles()
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2>Clicky Game!</h2>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h4>click on an image to earn points, but don't click any more than once!</h4>
          </Grid>
        </Grid>
      </div>

      {/* <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc'}} />
        <div className="row">
          <h2>Clicky Game!</h2>
        </div>
        <div className="row">
          <h4>click on an image to earn points, but don't click any more than once!</h4>
        </div> */}
        {/* <div className="row"> */}
					{/* {images.map(image => (
						// <imageElement
						// 	key={image.id}
						// 	id={image.id}
						// 	name={image.name}
						// 	// clicked={image.clicked}
						// 	image={image.image}
						// 	// handleClick={this.handleClick}
            // />
            //  col-xs-4 col-sm-4
            <div 
            className="imageele col-xs-12 col-sm-6 col-md-3" 
            key={image.id}
            // onClick={() => props.handleClick(props.id, props.clicked)}
            >
              <Grid item>
                <img 
                id={image.name} 
                src={image.image}
                alt={image.name}
                />
              </Grid>
            </div>
            // <Grid item xs={12} sm={6} md={4}>
            //   <img className="imageele" id={image.image} src={image.image} alt={image.name}/>
            // </Grid> 
            // <div className={classes.root}>
            //   <Paper className={classes.paper}>        
            //     <Grid container spacing={2}>
            //       <Grid item>
            //           <img className={classes.img} alt="deer" src={image.image}/>
            //       </Grid>
            //     </Grid>
            //   </Paper>
            // </div>  
					))} */}
				{/* </div> */}

      {/* </Container> */}
    </React.Fragment>
  );
}

export default Images
