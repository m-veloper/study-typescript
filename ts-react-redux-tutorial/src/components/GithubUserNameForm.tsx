import React, {useState} from "react";
import "./GithubUserNameForm.css";

type GithubUserNameFormProps = {
    onSubmitUserName: (userName: string) => void;
}

function GithubUserNameForm({onSubmitUserName}: GithubUserNameFormProps) {
    const [input, setInput] = useState('');

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitUserName(input);
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return(
        <form onSubmit={onSubmit} className="GithubUserNameForm">
            <input onChange={onChange} value={input} placeholder="Github 계정을 입력하세요."/>
            <button type="submit">조회</button>
        </form>
    )
}

export default GithubUserNameForm;
