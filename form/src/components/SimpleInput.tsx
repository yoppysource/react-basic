import { useInput } from "../hooks/use-input";

//* Ref와 state 두가지 방법으로 form을 관리할 수 있다. 제출시 한번만 가져온다면 ref가 낫고(렌더링 절약),
//* 타입하는 내내 트래킹 하고 있다면 state가 나음 또한 벨류 리셋할 때도 state가 나음 Ref쓰게되면 직접적으로 DOM을 조작하게 되는데 안티패턴이다.
const SimpleInput: React.FC = (_) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangedHandler: nameChangedHandler,
    isValid: enteredNameIsValid,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangedHandler: emailChangedHandler,
    isValid: enteredEmailIsValid,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          value={enteredName}
          onChange={nameChangedHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="text"
          id="email"
          onBlur={emailBlurHandler}
          value={enteredEmail}
          onChange={emailChangedHandler}
        />
        {emailInputHasError && (
          <p className="error-text">
            Email must not be empty and must include @
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
