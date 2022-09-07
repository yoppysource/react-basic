import { Reducer, useReducer } from "react";

interface InputState {
  isTouched: boolean;
  value?: string;
}

interface Action {
  type: "INPUT" | "BLUR" | "RESET";
  value?: string;
}

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer: Reducer<InputState, Action> = (
  state: InputState,
  action: Action
) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }

  return state;
  // return inputStateReducer;
};

export const useInput = (validateValue: (input: string) => boolean) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value!);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event: never) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangedHandler,
    inputBlurHandler,
    reset,
  };
};
