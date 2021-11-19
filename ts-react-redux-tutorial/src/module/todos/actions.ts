import {deprecated} from 'typesafe-actions';
const {createStandardAction} = deprecated;

export const ADD_TODO = 'todos/ADD_TODO' as const; // 파라미터로 받아오는 값이랑, 페이로드값이랑 다른 경우는 createAction을 사용하지 않는 편이 깔끔할 수 있다.
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
})

export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();
