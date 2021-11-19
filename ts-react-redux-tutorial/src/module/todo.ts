import {deprecated, ActionType, createReducer, action} from 'typesafe-actions';

const {createStandardAction} = deprecated;

const ADD_TODO = 'todos/ADD_TODO' as const; // 파라미터로 받아오는 값이랑, 페이로드값이랑 다른 경우는 createAction을 사용하지 않는 편이 깔끔할 수 있다.
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

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

const actions = {
    addTodo,
    removeTodo,
    toggleTodo
}
type TodoAction = ActionType<typeof actions>;

export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

type TodosState = Todo[];

const initialState: TodosState = [];

const todos = createReducer<TodosState, TodoAction>(initialState, {
    [ADD_TODO]: (state, action) => state.concat({
        ...action.payload,
        done: false
    }),
    [TOGGLE_TODO]: (state, action) => state.map(
        todo => todo.id === action.payload
            ? {...todo, done: !todo.done}
            : todo
    ),
    [REMOVE_TODO]: (state, action) => state.filter(
        todo => todo.id !== action.payload
    )
})

export default todos;

// const ADD_TODO = 'todos/ADD_TODO' ;
// const TOGGLE_TODO = 'todos/TOGGLE_TODO' ;
// const REMOVE_TODO = 'todos/REMOVE_TODO' ;
//
// let nextId = 1;
//
// export const addTodo = (text: string) => ({
//     type: ADD_TODO,
//     payload: {
//         id: nextId++,
//         text
//     }
// })
//
// export const toggleTodo = (id: number) => ({
//     type: TOGGLE_TODO,
//     payload: id
// });
//
// export const removeTodo = (id: number) => ({
//     type: REMOVE_TODO,
//     payload: id
// });
//
// type TodoAction =
//     | ReturnType<typeof addTodo>
//     | ReturnType<typeof toggleTodo>
//     | ReturnType<typeof removeTodo>
//
// export type Todo = {
//     id: number;
//     text: string;
//     done: boolean;
// }
//
// type TodosState = Todo[];
//
// const initialState: TodosState = [];
//
// function todos(state: TodosState = initialState
//                , action: TodoAction): TodosState {
//     switch (action.type) {
//         case ADD_TODO:
//             return state.concat({
//                 id: action.payload.id,
//                 text: action.payload.text,
//                 done: false
//             });
//         case TOGGLE_TODO:
//             return state.map(todo =>
//                 todo.id === action.payload ? {...todo, done: !todo.done} : todo
//             );
//         case REMOVE_TODO:
//             return state.filter(todo => todo.id !== action.payload);
//         default:
//             return state;
//     }
// }
//
// export default todos;