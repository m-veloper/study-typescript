import {Dispatch} from "redux";
import {RootState} from "../index";
import {getUserProfile} from "../../api/github";
import {getUserProfileAsync} from "./actions";
import createAsyncThunk from "../../lib/createAsyncThunk";


// export function getUserProfileThunk(userName: string) {
//     return async (dispatch: Dispatch, getState: () => RootState) => {
//         const state = getState();
//         const {request, success, failure} = getUserProfileAsync;
//         dispatch(request());
//         try {
//             const userProfile = await getUserProfile(userName);
//             dispatch(success(userProfile));
//         } catch (e) {
//             // @ts-ignore
//             dispatch(failure(e));
//         }
//     }
// }

export const getUserProfileThunk = createAsyncThunk(getUserProfileAsync, getUserProfile);

