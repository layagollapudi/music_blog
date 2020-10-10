import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Post from "./components/Post";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" exact component={Post} />
      </Switch>
    </div>
  );
}
