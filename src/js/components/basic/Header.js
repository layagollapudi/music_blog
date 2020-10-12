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

import { toolbarStyles } from '../../helpers/styling';

// FOR TESTING
const loggedIn = false;

export default function Header({ title }) {

  const classes = toolbarStyles();
  const history = useHistory();

  const [openCreate, setOpenCreate] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSubscribe, setOpenSubscribe] = useState(false);

  const navigateHome = () => {
    history.push('/');
  }

  const onCreateOpen = () => { setOpenCreate(true); }
  const onCreateClose = () => { setOpenCreate(false); }

  const onLoginOpen = () => { setOpenLogin(true); }
  const onLoginClose = () => { setOpenLogin(false); }

  const onSubscribeOpen = () => { setOpenSubscribe(true); }
  const onSubscribeClose = () => { setOpenSubscribe(false); }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small" className={classes.toolbarLink} onClick={onSubscribeOpen}>Subscribe</Button>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          fontWeight="fontWeightBold"
          noWrap
          className={classes.toolbarTitle}
          onClick={navigateHome}
        >
          {title}
        </Typography>
        <div>
          {loggedIn &&
            <Button
              variant="outlined" size="small"
              onClick={onCreateOpen} className={classes.toolbarLink}
            >
              Create
            </Button>
          }
          <Button
            variant="outlined" size="small"
            onClick={loggedIn ? null : onLoginOpen} className={classes.toolbarLink}
          >
            {loggedIn ? "Logout" : "Login"}
          </Button>
        </div>
      </Toolbar>
      <LoginModal onClose={onLoginClose} open={openLogin} />
      <SubscribeModal onClose={onSubscribeClose} open={openSubscribe} />
    </React.Fragment>
  );
}
