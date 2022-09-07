import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import { Expense } from "./ExpenseList";

const Expenses: React.FC<{ items: Expense[] }> = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredExpenses = items.filter((expense: Expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangedHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChanged={filterChangedHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
