import React, { useState } from "react";
import "./ExpenseForm.css";

export interface ExpenseInputData {
  title: string;
  amount: string;
  date: Date;
}

const ExpenseForm: React.FC<{
  onSaveExpenseData: (inputData: ExpenseInputData) => void;
  onCancel: React.MouseEventHandler;
}> = ({ onSaveExpenseData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //? 이렇게 한번에 처리하는 경우도 있다.
  //  const [userInput, setUserInput] = useState({
  //         enteredTitle: '',
  //         enteredAmount: '',
  //         enteredDate: ''
  //     });
  // const titleChangeHandler = (event) => {
  //     이 경우 이런식으로 처리하면, 이전 상태에 의존하는 게 되는데, 리엑트 특성상 반드시 이 상태가
  //     최신이라는 보장이 없다 따라서 익명함수로 처리하는게 올바른 방법이다
  //! 틀린 예
  //         setUserInput({
  //             ...userInput,
  //             enteredTitle: event.target.value
  //         });
  //* 맞는 예
  //         setUserInput((prevState) => {
  //             return {...prevState, enteredTitle: event.target.value}
  //         })
  //     };
  const titleChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    // 기본 동작은 페이지가 리로드됨, 이 웹페이지를 호스팅하는 곳에 요청을 보내는게 기본 동작임 그걸 막음
    event.preventDefault();
    const expenseData: ExpenseInputData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
