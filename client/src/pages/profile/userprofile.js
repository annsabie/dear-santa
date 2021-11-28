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

export default function UserProfile() {
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Username
        </Typography>
        <Avatar sx={{ bgcolor: green[800] }}>OP</Avatar>
        <UploadButton />
        <Typography variant="body2">
          Share your list!
        </Typography>
        <Typography variant="body2">
          <link href = "/" />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Paper>
  );
}


