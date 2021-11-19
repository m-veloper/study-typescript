import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../index";
import {getUserProfile} from "../../api/github";
import {getUserProfileAsync} from "./actions";
import any = jasmine.any;
import {AxiosError} from "axios";

export function getUserProfileThunk(userName: string) {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        const state = getState();
        const {request, success, failure} = getUserProfileAsync;
        dispatch(request());
        try {
            const userProfile = await getUserProfile(userName);
            dispatch(success(userProfile));
        } catch (e) {
            // @ts-ignore
            dispatch(failure(e));
        }
    }
}