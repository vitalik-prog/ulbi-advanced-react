import {store} from "../../../store";
import {AuthActionsEnum} from "../../../enums/store";
import {UserType} from "../user";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AuthStateType = {
  isAuth: boolean
  user: UserType
  isLoading: boolean
  error: string
}

export type SetAuthActionType = {
  type: AuthActionsEnum.SET_AUTH
  payload: boolean
}

export type SetErrorActionType = {
  type: AuthActionsEnum.SET_ERROR
  payload: string
}

export type SetIsLoadingActionType = {
  type: AuthActionsEnum.SET_IS_LOADING
  payload: boolean
}

export type SetUserActionType = {
  type: AuthActionsEnum.SET_USER
  payload: UserType
}

export type AuthActions =
  SetAuthActionType |
  SetErrorActionType |
  SetIsLoadingActionType |
  SetUserActionType
