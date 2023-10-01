import React from "react";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

const App = () => {
  return (
    <Router>
      <HashRouter basename="/app">
        <Routes />
      </HashRouter>
    </Router>
  );
};

export default App;
