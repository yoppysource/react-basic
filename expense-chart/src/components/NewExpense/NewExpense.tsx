import { useState } from "react";
import { Expense } from "../Expenses/ExpenseList";
import ExpenseForm, { ExpenseInputData } from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense: React.FC<{ onAddExpense: (expense: Expense) => void }> = ({
  onAddExpense,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: ExpenseInputData) => {
    const expenseData = {
      ...enteredExpenseData,
      amount: parseInt(enteredExpenseData.amount),
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const formContent = isEditing ? (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    </div>
  ) : (
    <div className="new-expense">
      <button onClick={startEditingHandler}>Add New Expense</button>
    </div>
  );

  return formContent;
};

export default NewExpense;
