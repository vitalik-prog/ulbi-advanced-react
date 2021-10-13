import axios, {AxiosResponse} from "axios";
import {UserType} from "../common/types/user";

export default class UserService {
  static async getUsers (): Promise<AxiosResponse<UserType[]>> {
    return axios.get<UserType[]>('users.json')
  }
}