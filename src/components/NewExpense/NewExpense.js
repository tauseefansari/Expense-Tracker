import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const [isFormVisible, setFormVisible] = useState(false);

  const saveExpenseData = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now().toString()
    };
    props.onAddExpense(expenseData);
    setFormVisible(false);
  };

  const formShowHandler = () => {
    setFormVisible(true);
  };

  const formHideHandler = () => {
    setFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!isFormVisible && <button onClick={formShowHandler}> Add new Expense </button>}
      {isFormVisible && <ExpenseForm onSaveExpenseData={saveExpenseData} onHide={formHideHandler} />}
    </div>
  );
};

export default NewExpense;
