import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import LoginModal from './LoginModal';
import SubscribeModal from './SubscribeModal';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(1),
  },
  toolbarTitle: {
    flex: 1,
    cursor: 'pointer',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header({ title }) {
  const classes = useStyles();
  const history = useHistory();

  const [openLogin, setOpenLogin] = useState(false);
  const [openSubscribe, setOpenSubscribe] = useState(false);
  const navigateHome = () => {
    history.push('/');
  }

  const onLoginOpen = () => { setOpenLogin(true); }
  const onLoginClose = () => { setOpenLogin(false); }

  const onSubscribeOpen = () => { setOpenSubscribe(true); }
  const onSubscribeClose = () => { setOpenSubscribe(false); }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small" onClick={onSubscribeOpen}>Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          onClick={navigateHome}
        >
          {title}
        </Typography>
        <Button variant="outlined" size="small" onClick={onLoginOpen}>
          Login
        </Button>
      </Toolbar>
      <LoginModal onClose={onLoginClose} open={openLogin} />
      <SubscribeModal onClose={onSubscribeClose} open={openSubscribe} />
    </React.Fragment>
  );
}
