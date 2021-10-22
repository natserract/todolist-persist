import { TodoFieldState } from "../../types/todos";

export type TodoAllIds = {
  [id: string]: TodoFieldState,
}

export type TodosState = {
  [u: string]: {
    allIds: TodoAllIds,
    byId: TodoFieldState
  }
};
