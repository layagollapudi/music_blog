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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { modalStyles } from '../../helpers/styling';

export default function LoginModal({ onClose, open }) {
  const classes = modalStyles();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const json = {}
    const formdata = new FormData(event.target);
    formdata.forEach(function(value, prop){
      json[prop] = value
    });

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(json),
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <Dialog onClose={() => { onClose() }} open={open}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined" margin="normal" required fullWidth autoFocus
              id="email_address" label="Email Address" name="email_address" autoComplete="email"
            />
            <TextField
              variant="outlined" margin="normal" required fullWidth
              name="password" label="Password" type="password" id="password" autoComplete="current-password"
            />
            <Button
              type="submit" fullWidth variant="contained" color="primary" className={classes.submit}
            >
              Sign In
            </Button>
            <Link href="#" variant="body2">
              Don't have an account? <b>Sign Up</b>!
            </Link>
          </form>
        </div>
      </Container>
    </Dialog>
  );
}
