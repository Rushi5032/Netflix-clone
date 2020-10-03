import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Router>
    </>
  );
}

export default App;
