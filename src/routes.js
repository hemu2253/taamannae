import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Clockwork = lazy(() => import("./pages/clock-work"));
const HomeSeeker = lazy(() => import("./pages/home-seeker"));

export default function Routes() {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Redirect exact from="/" to="/clock-work" />
        <Route path="/clock-work" component={Clockwork} />
        <Route path="/home-seeker" component={HomeSeeker} />
        <Route component={<div />} />
      </Switch>
    </Suspense>
  );
}
