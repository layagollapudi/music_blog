import React from 'react';
import { useHistory } from "react-router-dom";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
  },
  cardDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  cardMedia: {
    width: 250,
  },
  titleColor: {
    color: theme.palette.whiteText.main,
  },
  subtitleColor: {
    color: theme.palette.darkText.main,
  },
}));

export default function BlogCard({ id, title, date, author, description, image }) {
  const classes = useStyles();
  const history = useHistory();
  const navigateTo = () => history.push(`/post/${id}`);

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="button" onClick={navigateTo}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              {title && <Typography component="h3" variant="h6" className={classes.titleColor}>{title}</Typography>}
              {date && <Typography variant="subtitle1" className={classes.subtitleColor}>{date}</Typography>}
              {author && <Typography variant="subtitle1" className={classes.subtitleColor}>{author}</Typography>}
              {description && <Typography variant="subtitle1" paragraph>{description}...</Typography>}
            </CardContent>
          </div>
          { image &&
            <CardMedia
              className={classes.cardMedia}
              image={image}
              title={title}
            />
          }
        </Card>
      </CardActionArea>
    </Grid>
  );
}
