import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

  const getFilteredYear = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  const yearFilterHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeYear={yearFilterHandler} />
      <ExpensesChart expenses={getFilteredYear} />
      <ExpensesList items={getFilteredYear} year={filteredYear} />
    </Card>
  );
};

export default Expenses;
