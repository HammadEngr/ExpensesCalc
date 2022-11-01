import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./Expenseitem";

const ExpensesList = (props) => {
  // using gaurd clause
  if (props.items.length === 0)
    return <p className="expenses-list__fallback">no data available</p>;
  return props.items.map((item) => (
    <ul className="expenses-list">
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    </ul>
  ));
};
export default ExpensesList;
