import React from "react";
import Greetings from "./Component/Greetings";

const App: React.FC = () => {
  const onClick = (name:string) => {
    console.log(name);
  }
  return (
    <Greetings name={"리액트"} onClick={onClick}/>
);
}

export default App;
