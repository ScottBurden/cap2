import Bride from "./Bride";
import PicGrid from "./PicGrid";
import HomePage from "./HomePage";
import React from "react";
import Card from "./PicCard";
import { Switch, Route } from "react-router-dom";
//import PicList from "./PicList";


function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/bride">
        {/* <PicList /> */}
        <Bride />
      </Route>
      <Route exact path="/grid">
        <PicGrid />
      </Route>
      <Route exact path="/card">
        <Card />
      </Route>
      <Route></Route>
    </Switch>
  );
}

export default Routes;
