import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Home from "./components/Home";
import Post from "./components/Post";

import { theme } from "./helpers/styling";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post/:id" exact component={Post} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}
