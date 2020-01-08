import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./App/data/Routes";
import withTracker from "./AppData/withTracker";

import "./AppData/css/bootstrap.min.css"
import "./AppData/css/shards-dashboards.1.1.0.min.css"

export default () => (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {Routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />);
        })}
      </div>
    </Router>
  );
  