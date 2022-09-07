import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter: React.FC<{
  onFilterChanged: (value: string) => void;
  selected: string;
}> = ({ onFilterChanged, selected }) => {
  const filterChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChanged(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterChangeHandler} value={selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
