import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import NotFound from "./components/NotFound";

const Clockwork = lazy(() => import("./pages/clock-work"));
const HomeSeeker = lazy(() => import("./pages/home-seeker"));

class Routes extends React.Component {
  render() {
    return (
      <Suspense fallback={<div />}>
        <Switch>
          <Redirect exact from="/" to="/clock-work" />
          <Route path="/clock-work" component={Clockwork} />
          <Route path="/home-seeker" component={HomeSeeker} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(Routes);
