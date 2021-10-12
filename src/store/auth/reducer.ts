import {AuthActions, AuthStateType} from "../../common/types/state";
import {AuthActionsEnum} from "../../enums/store";

const initialState: AuthStateType = {
  isAuth: true
}

const authReducer = (state = initialState, action: AuthActions): AuthStateType => {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload }
    default:
      return state
  }
}

export default authReducer
