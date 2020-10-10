import React, { useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from './basic/Header';
import BlogCard from './basic/BlogCard';

export default function Home() {
  useEffect(() => {
    fetch('/').then(data => {
      console.log(data);
    });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Music Musings" />
      </Container>
    </React.Fragment>
  );
}
