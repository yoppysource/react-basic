import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
const ExpensesList: React.FC<{ items: Expense[] }> = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
