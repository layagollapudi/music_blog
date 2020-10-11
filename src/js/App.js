import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Home from "./components/Home";
import Post from "./components/Post";

const theme = createMuiTheme({
  palette: {
    primary: { main: '#30D5C8' },
    secondary: { main: '#FFC2C7' },
    whiteText: { main: '#FFFFFF' },
    darkText: { main: '#0e4642' },
    midText: { main: '#1b877f' },
  },
});

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
