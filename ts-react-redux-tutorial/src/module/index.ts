import {combineReducers} from "redux";
import counter from "./counter";
import todos from "./todos";
import github, { githubSaga } from "./github";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter,
  todos,
  github
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
// 루트 사가를 만들어서 내보내주세요.
export function* rootSaga() {
  yield all([githubSaga()]);
}
