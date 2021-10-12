import {store} from "../../../store";
import {AuthActionsEnum} from "../../../enums/store";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AuthStateType = {
  isAuth: boolean
}

export type SetAuthActionType = {
  type: AuthActionsEnum.SET_AUTH
  payload: boolean
}

export type AuthActions =
  SetAuthActionType
