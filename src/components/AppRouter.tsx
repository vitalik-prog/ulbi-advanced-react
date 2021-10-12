import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {RoutesNames} from "../enums/routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
  const { isAuth } = useTypedSelector(state => state.auth)
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