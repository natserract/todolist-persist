import { Action, ActionCreator } from "redux";

export enum DataUserActionTypes {
  ADD_USER = '@@ADD_USER',
}
// export type AddUser = Action<DataUserActionTypes.ADD_USER>;


export type AddUser = {
  userId: string,
  name: string,
} & Action<DataUserActionTypes.ADD_USER>;

export const addUser: ActionCreator<AddUser> = (
  userId: string,
  name: string,
) => ({
  type: DataUserActionTypes.ADD_USER,
  userId,
  name,
});