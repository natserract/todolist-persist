import { combineReducers } from 'redux';
import { userReducer } from './dataUser';
import { UserState } from './dataUser/State';
import { todosReducer } from './todos';
import { TodosState } from './todos/State';

export type AppState = {
  todos: TodosState;
  dataUser: UserState
};

export const rootReducer = combineReducers<AppState>({
  todos: todosReducer, // TodosState,
  dataUser: userReducer // UserState
});
