import React from 'react';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SubscribeModal({ onClose, open }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Dialog onClose={() => { onClose() }} open={open}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AddAlertIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Subscribe
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined" margin="normal" required fullWidth autoFocus
              id="email" label="Email Address" name="email" autoComplete="email"
            />
            <Button
              type="submit" fullWidth variant="contained" color="primary" className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </Dialog>
  );
}
