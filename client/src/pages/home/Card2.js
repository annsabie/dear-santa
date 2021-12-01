import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Kids from "../../images/kids.jpg";

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
          alt="picture of kids around tree"
          height="300"
          image={Kids}
          title="Sharable"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            COMING SOON!!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Share your wishlist with family and friends with a handy link!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
