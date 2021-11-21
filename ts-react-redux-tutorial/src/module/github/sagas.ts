import {GET_USER_PROFILE, getUserProfileAsync} from "./actions";
import {call, put, takeEvery} from "redux-saga/effects";
import {getUserProfile, GithubProfile} from "../../api/github";
import createAsyncSaga from "../../lib/createAsyncSaga";

// 기존
// function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>) {
//     try {
//         const userProfile: GithubProfile = yield call(getUserProfile, action.payload);
//         yield put(getUserProfileAsync.success(userProfile));
//     } catch (e) {
//         // @ts-ignore
//         yield put(getUserProfileAsync.failure(e));
//     }
// }

// 리팩토링
const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}