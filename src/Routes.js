import Bride from "./Bride";
import Home from "./Home";
import PicGrid from "./PicGrid";
import React from "react";
import Card from "./PicCard";
import { Switch, Route } from "react-router-dom";


function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/bride">
        <Bride />
      </Route>
      <Route exact path="/grid">
        <PicGrid />
      </Route>
      <Route exact path="/card">
        <Card />
      </Route>
    </Switch>
  );
}

export default Routes;