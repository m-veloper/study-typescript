/**
 * typesafe-action을 사용할 경우
 * npm install typesafe-actions
 */
import {deprecated, ActionType, createReducer, action} from 'typesafe-actions';

const {createStandardAction} = deprecated;


export const increase = createStandardAction("counter/INCREASE")();
export const decrease = createStandardAction("counter/DECREASE")();
export const increaseBy = createStandardAction("counter/INCREASE_BY")<number>();

type CounterState = {
    count: number
};

const initialState: CounterState = {
    count: 0
}

const actions = {increase, decrease, increaseBy};
type CounterAction = ActionType<typeof actions>;

const counter = createReducer<CounterState, CounterAction>(initialState)
    .handleAction(increase, state => ({count: state.count + 1}))
    .handleAction(decrease, state => ({count: state.count - 1}))
    .handleAction(increaseBy, (state, action) => ({count: state.count + action.payload}))

export default counter;


/**
 * typesafe-action을 사용하지 않을 경우
 */
// const INCREASE = "counter/INCREASE" as const;
// const DECREASE = "counter/DECREASE" as const;
// const INCREASE_BY = "counter/INCREASE_BY" as const;
//
// export const increase = () => ({type: INCREASE});
// export const decrease = () => ({type: DECREASE});
// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff
// });
//
// type CounterState = {
//   count: number
// };
//
// const initialState: CounterState = {
//   count: 0
// }
//
// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>
//
// function counter(state: CounterState = initialState, action: any): CounterState {
//   switch (action.type) {
//     case INCREASE:
//       return {count: state.count + 1};
//     case DECREASE:
//       return {count: state.count - 1};
//     case INCREASE_BY:
//       return {count: state.count + action.payload};
//     default:
//       return state;
//   }
// }
//
// export default counter;


