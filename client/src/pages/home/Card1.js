import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Present from "../../images/present.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="picture of a christmas present"
          height="300"
          image={Present}
          title="Simple"
          elevation={5}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Simple
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Easily make a wishlist to hold all the goodies for Santa to bring
            come Christmas!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
