import { useInput } from "../hooks/use-input";

const BasicForm: React.FC = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    valueChangedHandler: firstNameChangedHandler,
    isValid: enteredFirstNameIsValid,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    valueChangedHandler: lastNameChangedHandler,
    isValid: enteredLastNameIsValid,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangedHandler: emailChangedHandler,
    isValid: enteredEmailIsValid,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  const isFormIsValid =
    enteredEmailIsValid && enteredFirstNameIsValid && enteredLastNameIsValid;

  const getClass = (hasError: boolean) =>
    !hasError ? "form-control" : "form-control invalid";

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isFormIsValid) return;
    resetEmailInput();
    resetFirstNameInput();
    resetLastNameInput();
  };

  return (
    <form>
      <div className="control-group" onSubmit={onSubmit}>
        <div className={getClass(firstNameInputHasError)}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
            onChange={firstNameChangedHandler}
          />
        </div>
        <div className={getClass(lastNameInputHasError)}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            onChange={lastNameChangedHandler}
          />
        </div>
      </div>
      <div className={getClass(emailInputHasError)}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onBlur={emailBlurHandler}
          value={enteredEmail}
          onChange={emailChangedHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!isFormIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
