// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'

// // This is the about page
// const About = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '90vh'
//       }}
//     >
//       {/* <h1>About</h1> */}

//       <div>
//       <div className="row flex-container mt-3 ml-3">
//           <div className="col-sm-12 col-lg-5 shadow-lg rounded">
//             <div className="card m-1">
//               <div className="card-body justify-content-end">
//                 <h2 className="text-center"> Dear Santa! </h2>
//                 <div className="welcome-text">
//                   <p></p>
//                   <p></p>
//                   <p></p>
//                   <p className="text-center">Who we are and what we do</p>
//                   <p className="blog-text">
//                     We can agree there is so much time and money spent during
//                     holiday season just trying to figure out which gift to buy,
//                     or if someone had already bought the gift that you are still
//                     waiting in line for.
//                   </p>
//                   <p className="blog-text">
//                     Imagine waking up for Christmas knowing you will not receive
//                     the same gift from your favorite aunties or going gift
//                     shopping, knowing exactly what to add to your shopping cart.
//                   </p>
//                   <p className="blog-text">
//                     Here at Dear Santa, we have made it our priority to equip
//                     you with tool to be able to navigate your holiday season
//                     shopping adventures.
//                   </p>
//                   <p className="blog-text">Why choose us?</p>
//                   <p className="blog-text">
//                     Dear Santa allows you to create a wish list that can be
//                     posted publicly or privately amongst family and friends.
                    
//                     <div>
//                       {/* <Stack direction="row" spacing={2}>
//                         <Item>You can see what items have been purchased and what is
//                     still available to be changed.</Item>
//                         <Item>Effortless organization of
//                     your gifts.</Item>
//                         <Item>All you need is a link to your item to add it to
//                     your wish list and have an ability to rank your items.</Item>
//                       </Stack> */}
//                   </div>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Santa from '../../images/santa.jpg'
import Winter from '../../images/winter.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" spacing={3} style={{ margin: "0px 0px 0px 0px"}}>
        <Grid item xs={12} sm={5}>
       
          <Paper className={classes.paper}>Dear Santa! Our Story</Paper>
        </Grid></Grid>

        <Grid container justifyContent="center" spacing={3} style={{ margin: "0px 0px 300px 0px"}}>
        <Grid item justifyContent="center" xs={12} sm={5}>

       
          <Paper className={classes.paper}>
            
                    
                  <img src={Santa} style={{
                    width: "80%"
                  }}></img>
                    
                    <p>We can agree there is so much time and money spent during
                    holiday season just trying to figure out which gift to buy,
                    or if someone had already bought the gift that you are still
                    waiting in line for.
                    Imagine waking up for Christmas knowing you will not receive
                    the same gift from your favorite aunties or going gift
                    shopping, knowing exactly what to add to your shopping cart.
                    </p>
                    <p>      
                    Here at Dear Santa, we have made it our priority to equip
                    you with tool to be able to navigate your holiday season                    
                    All you need is a link to your item to add it to
                    your wish list and have an ability to rank your items.
                    You can see what items have been purchased and what is
                    still available to be changed -
                    Effortless organization of
                    your gifts</p></Paper>
        </Grid></Grid>

     
    </div>
  );
}