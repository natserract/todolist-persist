import { Reducer } from 'redux';
import { TodoActionTypes, AllTodos, AddTodo, SetTodo, DeleteTodo, ViewTodo } from '../../actions/todos';
import { TodosState } from './State';
import setWith from 'lodash.setwith'

export const initialTodoState: TodosState = {}

const addTodo = (action: AddTodo, state: TodosState): TodosState => {
  const todoId = action.id
  const todoUserName = action.userName
  const todoContent = action.content

  const data = { ...state }
  const key = `[${todoUserName}]['allIds'][${todoId}]`;
  setWith(data, key, { ...todoContent }, Object);
  
  state = { ...data }

  return {
    ...state
  };
}

const setTodo = (action: SetTodo, state: TodosState): TodosState => {
  const todoId = action.id
  const todoUserName = action.userName
  const todoStatus = action.status

  state[todoUserName]['allIds'][todoId]['status'] = todoStatus 

  return {
    ...state,
  };
}

const deleteTodo = (action: DeleteTodo, state: TodosState): TodosState => {
  const todoId = action.id
  const todoUserName = action.userName

  delete state[todoUserName].allIds[todoId]

  return {
    ...state,
  };
}

const viewTodo = (action: ViewTodo, state: TodosState): TodosState => {
  const todoId = action.id
  const todoUserName = action.userName

  const byId = { ...state[todoUserName]?.allIds[todoId] };

  return {
    [todoUserName]: {
      byId,
      ...state[todoUserName]
    }
  };
}


export const todosReducer: Reducer<TodosState,
  | AllTodos
  | AddTodo
  | SetTodo
  | DeleteTodo
  | ViewTodo
> = (
  state: TodosState = initialTodoState,
  action:
    | AllTodos
    | AddTodo
    | SetTodo
    | DeleteTodo
    | ViewTodo
): TodosState => {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO: {
        return addTodo(action, state)
      }
      case TodoActionTypes.SET_TODO: {
        return setTodo(action, state)
      }
      case TodoActionTypes.DELETE_TODO: {
        return deleteTodo(action, state)
      }
      case TodoActionTypes.VIEW_TODO: {
        return viewTodo(action, state)
      }
      default:
        return state;
    }
  }