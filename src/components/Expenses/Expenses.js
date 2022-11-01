import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "../Charts/ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const selectHandler = (value) => {
    setSelectedYear(value);
  };
  const filtered = props.items.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );

  // we can also use ternary opeartor isided the below
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onSelect={selectHandler} />
        <ExpensesChart expenses={filtered} />
        <ExpensesList items={filtered} />
      </Card>
    </div>
  );
};
export default Expenses;
