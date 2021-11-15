import React, {createContext, Dispatch, useContext, useReducer} from "react";

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

// type SampleDispatch = Dispatch<Action>;

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<Dispatch<Action> | null>(null);

type SampleProviderProps = {
  children: React.ReactNode;
}

export function SampleProvider({children}: SampleProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true
  })

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  )
}

export function useSampleState() {
  const sate = useContext(SampleStateContext);
  if (!sate) {
    throw new Error("Connot find SampleProvider")
  } else {
    return sate;
  }
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) {
    throw new Error("Connot find SampleProvider")
  } else {
    return dispatch;
  }
}
