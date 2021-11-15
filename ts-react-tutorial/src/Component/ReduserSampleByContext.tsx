import React from "react";
import {useSampleDispatch, useSampleState} from "./ContextSample";

type Color = "red" | "orange" | "yellow";
type State = {
  count: number,
  text: string,
  color: Color,
  isGood: boolean;
}
type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD"; }

function reducer(stat: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...stat,
        count: action.count
      }
    case "SET_TEXT":
      return {
        ...stat,
        text: action.text
      }
    case "SET_COLOR":
      return {
        ...stat,
        color: action.color
      }
    case "TOGGLE_GOOD":
      return {
        ...stat,
        isGood: !stat.isGood
      }
    default:
      throw new Error("Unhandled action type");
  }
}

function ReducerSample() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  const setCount = () => {
    dispatch({type: "SET_COUNT", count: 5});
  }
  const setText = () => {
    dispatch({type: "SET_TEXT", text: "bye"});
  }
  const setColor = () => {
    dispatch({type: "SET_COLOR", color: "orange"});
  }
  const toggleGood = () => {
    dispatch({type: "TOGGLE_GOOD"});
  }

  return (
    <div>
      <div>
        <p><code>count: </code>{state.count}</p>
        <p><code>txt: </code>{state.text}</p>
        <p><code>color: </code>{state.color}</p>
        <p><code>isGood: </code>{state.isGood ? "true" : "false"}</p>
      </div>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  )
}

export default ReducerSample;
