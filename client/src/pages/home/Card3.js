import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Stoked from "../../images/stokedDude.jpg";

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
          alt="picture of a happy man"
          height="300"
          image={Stoked}
          title="Web items"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Any Store
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Find your items from any online store and add it to your list!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
