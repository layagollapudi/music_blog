import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import moment from 'moment';

import Header from './basic/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    spacing: theme.spacing(10),
  },
  titleText: {
    color: theme.palette.darkText.main,
  },
  contentWrapper: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  content: {
    color: theme.palette.midText.main,
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  }
}));

export default function Post() {
  const classes = useStyles();
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBlogPost(data)
      })
      .catch((error) => { console.error(error) });
  }, []);

  const splitByNewlines = (content) => {
    return content.split("\n");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Music Musings" />
        {blogPost &&
          <div className={classes.root}>
            <Box mx={5} my={5}>
              <Typography variant="h5" className={classes.titleText} gutterBottom>{blogPost.title}</Typography>
              <Typography variant="subtitle1" className={classes.titleText} gutterBottom>
                <i>{new moment(Date(blogPost.date.$date).toString()).format('YYYY-MM-DD')}</i> by <b>{blogPost.author}</b>
              </Typography>
              <div className={classes.contentWrapper}>
                <Grid container spacing={6}>
                  <Grid item sm={6}>
                    {splitByNewlines(blogPost.content).map((content, i) => (
                      <Typography key={i} variant="body2" className={classes.content} gutterBottom>
                        {content}
                      </Typography>
                    ))}
                  </Grid>
                  {blogPost.image_link &&
                    <Grid item sm={6} zeroMinWidth>
                      <img src={blogPost.image_link} className={classes.image} />
                    </Grid>
                  }
                </Grid>
              </div>
            </Box>
          </div>
       }
      </Container>
    </React.Fragment>
  );
}
