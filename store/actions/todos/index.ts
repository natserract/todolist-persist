import { Action, ActionCreator } from 'redux';
import { TodoFieldState } from '../../types/todos';

export enum TodoActionTypes {
  INIT_TODOS = '@@INIT_TODOS',
  ALL_TODOS = '@@ALL_TODOS',
  ADD_TODO = '@@ADD_TODO',
  SET_TODO = '@@SET_TODO',
  DELETE_TODO = '@@DELETE_TODO',
  VIEW_TODO = '@@VIEW_TODO'
}

export type InitTodos = {
  id: string,
  userName: string,
} & Action<TodoActionTypes.INIT_TODOS>;

export const initTodos: ActionCreator<InitTodos> = (
  id: string,
  userName: string,
) => ({
  type: TodoActionTypes.INIT_TODOS,
  id,
  userName,
});

export type AllTodos = Action<TodoActionTypes.ALL_TODOS>;

export type AddTodo = {
  id: string,
  userName: string,
  content: TodoFieldState
} & Action<TodoActionTypes.ADD_TODO>;

export const addTodo: ActionCreator<AddTodo> = (
  id: string,
  userName: string,
  content: TodoFieldState
) => ({
  type: TodoActionTypes.ADD_TODO,
  id,
  content,
  userName,
});

export type SetTodo = {
  id: string,
  userName: string,
  status: string,
} & Action<TodoActionTypes.SET_TODO>;

export const setTodo: ActionCreator<SetTodo> = (
  id: string,
  userName: string,
  status: string 
) => ({
  type: TodoActionTypes.SET_TODO,
  id,
  userName,
  status,
});

export type DeleteTodo = { id: string, userName: string } & Action<TodoActionTypes.DELETE_TODO>;

export const deleteTodo: ActionCreator<DeleteTodo> = (
  id: string,
  userName: string,
) => ({
  type: TodoActionTypes.DELETE_TODO,
  id,
  userName,
});


export type ViewTodo = { id: string, userName: string } & Action<TodoActionTypes.VIEW_TODO>;

export const viewTodo: ActionCreator<ViewTodo> = (
  id: string,
  userName: string,
) => ({
  type: TodoActionTypes.VIEW_TODO,
  id,
  userName,
});