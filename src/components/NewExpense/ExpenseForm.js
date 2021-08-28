import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./ExpenseForm.css";

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [error, setError] = useState();

  const titleChangeHandler = event => setEnteredTitle(event.target.value);
  const amountChangeHandler = event => setEnteredAmount(event.target.value);
  const dateChangeHandler = event => setEnteredDate(event.target.value);

  const submitHandler = event => {
    event.preventDefault();
    if (enteredTitle.trim().length === 0) {
      setError({ title: "Invalid Input!", message: "You can't left fields blank or spaces! 😥" });
      return;
    }
    if (enteredTitle.trim() !== "" && Number.parseFloat(enteredAmount) > 0.1 && enteredDate.trim() !== "") {
      const expenseData = {
        title: enteredTitle,
        amount: Number.parseFloat(enteredAmount),
        date: new Date(enteredDate)
      };
      props.onSaveExpenseData(expenseData);
    }
    props.onHide();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} required />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} required />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2021-01-01" max="2030-12-31" value={enteredDate} onChange={dateChangeHandler} required />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onHide}>
            Cancel
          </button>
          <button type="submit"> Add Expense </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
