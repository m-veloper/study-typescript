import React from "react";
import Greetings from "./Component/Greetings";
import Counter from "./Component/Counter";
import MyForm from "./Component/MyForm";
import CounterByReducer from "./Component/CounterByReducer";
import ReducerSample from "./Component/ReduserSample";
import {SampleProvider} from "./Component/ContextSample";
import ReduserSampleByContext from "./Component/ReduserSampleByContext";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name);
  }
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    // <Greetings name={"리액트"} onClick={onClick}/>
    // <Counter/>
    // <MyForm onSubmit={onSubmit}/>
    // <CounterByReducer/>
    // <ReducerSample/>
    <SampleProvider>
      <ReduserSampleByContext/>
    </SampleProvider>
  );
}

export default App;
