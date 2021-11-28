import * as React from 'react';
//import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import { green } from "@material-ui/core/colors";
import UploadButton from './imageUpload';
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

export default function UserProfile() {
  return (
    <Paper 
    style={{
      height: '100vh',
      backgroundImage: 'linear-gradient(to right top, #d1bebc, #d2c0c1, #c5b0ba, #b2a3b6, #9798b2, #768faa)',
      padding: 0,
      margin: 0
    }}
   elevation={0}
>
<Grid container justifyContent='center' style={{ marginTop: '0rem' }}>
        <Grid item xs={11} md={9} lg={5}>
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Username
        </Typography>
        <Avatar sx={{ bgcolor: green[800] }}>OP</Avatar>
        <UploadButton />
      </CardContent>
    </Paper>
    </Grid>
    </Grid>
    </Paper>
  );
}


