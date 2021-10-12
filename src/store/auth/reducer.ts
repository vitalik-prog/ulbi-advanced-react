import {AuthActions, AuthStateType} from "../../common/types/state";
import {AuthActionsEnum} from "../../enums/store";
import {UserType} from "../../common/types/user";

const initialState: AuthStateType = {
  isAuth: false,
  user: {} as UserType,
  isLoading: false,
  error: ''
}

const authReducer = (state = initialState, action: AuthActions): AuthStateType => {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload }
    case AuthActionsEnum.SET_USER:
      return  { ...state, user: action.payload }
    case AuthActionsEnum.SET_ERROR:
      return { ...state, error: action.payload }
    case AuthActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}

export default authReducer
