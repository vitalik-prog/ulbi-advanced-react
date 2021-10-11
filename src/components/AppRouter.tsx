import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {RoutesNames} from "../enums/routes";

const AppRouter = () => {
  const isAuth = false
  return (
    isAuth
      ?
      <Switch>
        {privateRoutes.map(route =>
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to={RoutesNames.EVENTS} />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to={RoutesNames.LOGIN} />
      </Switch>
  );
};

export default AppRouter;