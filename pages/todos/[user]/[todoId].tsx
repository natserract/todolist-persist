import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppState } from '../../../store/reducers';
import { TodosState } from '../../../store/reducers/todos/State';
import { ActionCreator } from 'redux';
import { ViewTodo, viewTodo } from '../../../store/actions';
import { connect } from 'react-redux';

type PropsFromState = {
  todo: TodosState;
};

type PropsFromDispatch = {
  viewTodo: ActionCreator<ViewTodo>;
};

type TodoProps = {} & PropsFromState & PropsFromDispatch

const Todo: React.FC<TodoProps> = (props) => {
  const routeConfig = useRouter();
  const { query: { user: userId, todoId } } = routeConfig;

  const viewTodo = () => {
    props.viewTodo(todoId, userId)
  }

  useEffect(viewTodo, [])

  return (
    <h2>
      View Todos
      {todoId}
    </h2>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    todo: state.todos,
  };
};

const mapDispatchToProps = {
  viewTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);