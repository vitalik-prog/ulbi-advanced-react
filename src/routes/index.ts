import Login from "../pages/Login";
import Events from "../pages/Events";
import {RoutesType} from "../common/types/routes";
import {RoutesNames} from "../enums/routes";

export const publicRoutes: RoutesType[] = [
  {path: RoutesNames.LOGIN, component: Login, exact: true},
]

export const privateRoutes: RoutesType[] = [
  {path: RoutesNames.EVENTS, component: Events, exact: true},
]
