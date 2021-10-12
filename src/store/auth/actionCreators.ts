import {UserType} from "../../common/types/user";
import {
  AppDispatch,
  SetAuthActionType,
  SetErrorActionType,
  SetIsLoadingActionType,
  SetUserActionType
} from "../../common/types/state";
import {AuthActionsEnum} from "../../enums/store";
import axios from "axios";

export const AuthActionCreators = {
  setUser: (user: UserType): SetUserActionType => ({ type: AuthActionsEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthActionType => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
  setIsLoading: (isLoading: boolean): SetIsLoadingActionType => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: isLoading }),
  setError: (error: string): SetErrorActionType => ({ type: AuthActionsEnum.SET_ERROR, payload: error }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {

      try {
        dispatch(AuthActionCreators.setIsLoading(true))
        setTimeout(async () => {
          const response = await axios.get<UserType[]>('./users.json')
          const currentUser = response.data.find(user => user.username === username && user.password === password)
          if (currentUser) {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('username', currentUser.username)
            dispatch(AuthActionCreators.setIsAuth(true))
            dispatch(AuthActionCreators.setUser(currentUser))
            dispatch(AuthActionCreators.setIsLoading(false))
          } else {
            dispatch(AuthActionCreators.setError('User not found.'))
            dispatch(AuthActionCreators.setIsLoading(false))
          }
        }, 1000)
      } catch (e) {
        dispatch(AuthActionCreators.setError('Some error occurred'))
        dispatch(AuthActionCreators.setIsLoading(false))
      }

  },
  logout: () => (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setIsAuth(false))
    dispatch(AuthActionCreators.setUser({} as UserType))
    dispatch(AuthActionCreators.setError(''))
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
  }
}
