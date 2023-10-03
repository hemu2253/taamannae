import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const DesignProcess = lazy(() => import("./pages/design-process"));
const Home = lazy(() => import("./pages/home"));
const Clockwork = lazy(() => import("./pages/clock-work"));
const HomeSeeker = lazy(() => import("./pages/home-seeker"));
const BrightMinds = lazy(() => import("./pages/bright-minds"));

class Routes extends React.Component {
  render() {
    return (
      <Suspense fallback={<div />}>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/design-process" component={DesignProcess} />
          <Route path="/clock-work" component={Clockwork} />
          <Route path="/home-seeker" component={HomeSeeker} />
          <Route path="/bright-minds" component={BrightMinds} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Suspense>
    );
  }
}

export default withRouter(Routes);
