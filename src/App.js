// import ExpenseItem from "./components/Expenseitem";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense.js";
const DUMMY_EXP = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXP);
  const onAddExpenseHandler = (value) =>
    setExpenses((prevExp) => {
      return [value, ...prevExp];
    });
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};
export default App;
