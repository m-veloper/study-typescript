import {action, createReducer} from "typesafe-actions";
import {GithubState, GithubAction} from "./types";
import {GET_USER_PROFILE, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_SUCCESS, getUserProfileAsync} from "./actions";
import { asyncState, createAsyncReducer, transformToArray } from '../../lib/reducerUtils';

const initialState: GithubState = {
    // 기존
    // userProfile: {
    //     loading: false,
    //     error: null,
    //     data: null
    // }

    // 리팩토링
    userProfile: asyncState.initial()
};
//
// const github = createReducer<GithubState, GithubAction>(initialState, {
//     [GET_USER_PROFILE]: (state, action) => ({
//         ...state,
//         // 기존
//         // userProfile: {
//         //     loading: true,
//         //     error: null,
//         //     data: null
//         // }
//
//         // 리팩토링1
//         // userProfile: asyncState.load(state.uerProfile.data),
//         userProfile: asyncState.load()
//     }),
//     [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//         ...state,
//         //기존
//         // userProfile: {
//         //     loading: false,
//         //     error: null,
//         //     data: action.payload
//         // }
//
//         //리팩토링1
//         userProfile: asyncState.success(action.payload)
//     }),
//     [GET_USER_PROFILE_ERROR]: (state, action) => ({
//         ...state,
//         //기존
//         // userProfile: {
//         //     loading: false,
//         //     error: action.payload,
//         //     data: null
//         // }
//
//         //리팩토링1
//         userProfile: asyncState.error(action.payload)
//     })
// });

const github = createReducer<GithubState, GithubAction>(initialState).handleAction(
    transformToArray(getUserProfileAsync),
    createAsyncReducer(getUserProfileAsync, 'userProfile')
);

export default github;