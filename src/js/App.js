import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}
