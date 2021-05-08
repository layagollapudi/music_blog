import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Subject from '@material-ui/icons/Subject';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Moment from 'react-moment';
import moment from 'moment';

import { modalStyles } from '../../helpers/styling';

export default function BlogCardModal({ onClose, open }) {
  const classes = modalStyles();
  const history = useHistory();

  const [youtubeLinks, setYoutubeLinks] = useState([]);

  const handleYoutubeLinksOnEnter = (event) => {
    if (event.keyCode == 13) {  // Enter key
      if (event.target.value && event.target.value != ""){
          console.log([...youtubeLinks, event.target.value]);
          setYoutubeLinks([...youtubeLinks, event.target.value]);
      }
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const json = {}
    const formdata = new FormData(event.target);
    formdata.forEach(function(value, prop){
      json[prop] = value
    });

    // const response = await fetch("http://localhost:5000/create", {
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(json),
    // }).then(response => {
    //   console.log(response);
    // }).catch(error => {
    //   console.log(error);
    // });
  }

  return (
    <Dialog onClose={() => { onClose() }} open={open} fullWidth maxWidth="lg">
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Subject />
          </Avatar>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <div>
              <TextField
                margin="normal" required id="title" label="Title" name="title"
                className={classes.groupEntries}
              />
              <TextField
                margin="normal" required id="author" label="Author" name="author"
                className={classes.groupEntries}
              />
            </div>
            <div className={classes.parentGroup}>
              <TextField
                margin="normal" id="image_link" label="Image source" name="image_link"
                className={classes.groupEntries}
              />
              <TextField
                margin="normal" id="youtube_links" label="Youtube sources" name="youtube_links"
                className={classes.groupEntries} onKeyDown={handleYoutubeLinksOnEnter}
              />
              <div className={classes.buttonParent}>
                {youtubeLinks.map((link) => {
                  console.log(link);
                  return (
                    <Button
                      variant="contained" color="secondary" className={classes.buttonList}
                    >
                      {link}
                    </Button>
                  );
                })}
              </div>
            </div>
            <div>
              <TextField
                margin="normal" required id="content" label="Post Content" name="content"
                multiline rows={10} variant="outlined" fullWidth
                className={classes.groupEntries}
              />
            </div>
            <div>
              <TextField
                margin="normal" id="date" label="Date" name="date"
                type="date"
                className={classes.groupEntries}
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <Button
              type="submit" variant="contained" color="primary" className={classes.submit}
            >
              Create
            </Button>
          </form>
        </div>
      </Container>
    </Dialog>
  );
}
