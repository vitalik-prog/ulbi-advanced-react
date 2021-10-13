import {AuthActionCreators} from "./auth/actionCreators";
import {EventsActionCreators} from "./events/actionCreators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventsActionCreators
}
