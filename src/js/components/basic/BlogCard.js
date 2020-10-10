import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  cardMedia: {
    width: 250,
  },
});

export default function BlogCard({ title, date, author, description, image }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              {title && <Typography component="h2" variant="h5">{title}</Typography>}
              {date && <Typography variant="subtitle1" color="textSecondary">{date}</Typography>}
              {author && <Typography variant="subtitle1" color="textSecondary">{author}</Typography>}
              {description && <Typography variant="subtitle1" paragraph>{description}...</Typography>}
            </CardContent>
          </div>
          { image && <CardMedia
            className={classes.cardMedia}
            image={image}
            title={title}
          /> }
        </Card>
      </CardActionArea>
    </Grid>
  );
}
