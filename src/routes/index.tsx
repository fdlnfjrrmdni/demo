import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// screens
// import Home from "../pages/Home";
import Opportunity from "../pages/Opportunity";
import MastedData from "../pages/MastedData";
import Detail from "../pages/Detail";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Opportunity />
      </Route>
      <Route path="/master-data" exact>
        <MastedData />
      </Route>
      <Route path="/detail">
        <Detail />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
