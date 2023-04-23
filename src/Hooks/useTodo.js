import { useEffect, useReducer } from "react";
import { todoReducer } from "../helpers/todoReducer";

export const useTodo = () => {

    const initialState = JSON.parse(localStorage.getItem('todos')) || [];
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const onNewTodo = (todo) => {
        const action = {
            type: '[TODO]: add todo',
            payload: todo,
        }

        dispatch(action);
    }

    const onDeleteTodo = (id) => {
        const action = {
            type: '[TODO]: delete todo',
            payload: id,
        }

        dispatch(action);
    }

    const onToggleDone = (todos) => {
        const action = {
            type: '[TODO]: toggle todo',
            payload: todos,
        }

        dispatch(action)
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state])


  return {
    state,
    onNewTodo,
    onDeleteTodo,
    onToggleDone,
    todosCount: state.length,
    todosPending: state.filter( todo => !todo.done ).length
  }
}
