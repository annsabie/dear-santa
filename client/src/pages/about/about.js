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