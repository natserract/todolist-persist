import { ActionCreator, Reducer } from "redux"
import { removeSpaceToLower } from "../../../utils/utils"
import { AddUser, DataUserActionTypes } from "../../actions/dataUser"
import { UserState } from "./State"

export const initialUserState: UserState = {
  userId: '',
  name: '',
}

const addUser = (action: AddUser, state: UserState): UserState => {
  return {
    ...state,
    userId: action.userId,
    name: removeSpaceToLower(action.name),
  };
}

export const userReducer: Reducer<UserState,
  | AddUser
> = (
  state: UserState = initialUserState,
  action:
    | AddUser
): UserState => {
    switch (action.type) {
      case DataUserActionTypes.ADD_USER: {
        return addUser(action, state)
      }
      default:
        return state;
    }
  }