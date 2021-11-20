import React from "react";
import {RootState} from "../module";
import {useDispatch, useSelector} from "react-redux";
import GithubUserNameForm from "../components/GithubUserNameForm";
import {getUserProfileThunk} from "../module/github";
import GithubProfileInfo from "../components/GithubProfileInfo";

function GithubProfileLoader() {
    const {data, loading, error} = useSelector((state: RootState) => state.github.userProfile);
    const dispatch = useDispatch();
    const onSubmitUserName = (userName: string) => {
        dispatch(getUserProfileThunk(userName));
    }
    return (
        <>
            <GithubUserNameForm onSubmitUserName={onSubmitUserName}/>
            {loading && <p style={{textAlign: "center"}}>로딩중...</p>}
            {error && <p style={{textAlign: "center"}}>에러발생...</p>}
            {data && (
                <GithubProfileInfo name={data.name} thumbnail={data.avatar_url} bio={data.bio} blog={data.blog}/>)}
        </>
    )
}

export default GithubProfileLoader;