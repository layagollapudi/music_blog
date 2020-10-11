import React, { useState, useEffect } from "react";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import moment from 'moment';

import Header from './basic/Header';
import BlogCard from './basic/BlogCard';

export default function Home() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => { setBlogPosts(data) })
      .catch((error) => { console.error(error) });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Music Musings" />
        <main>
          <Grid container spacing={2}>
            {blogPosts.map((post) => (
              <BlogCard
                key={post._id}
                id={post._id}
                title={post.title}
                author={post.author}
                description={post.description}
                date={new moment(Date(post.date.$date).toString()).format('YYYY-MM-DD')}
                image={post.image_link}
              />
            ))}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
