import { useState } from "react";
import { useHistory } from "react-router";

const NewTransactionForm = ({ addTransaction }) => {
  let history = useHistory();
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
  });

  const handleTextChange = (e) => {
    const { id, value } = e.target;
    setTransaction({ ...transaction, [id]: value });
  };

  const handleNumberChange = (e) => {
    const { value } = e.target;
    setTransaction({...transaction, amount: Number(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(transaction);
    history.push("/transactions");
  };
  return (
    <div className="new">
      <h1>Add a new item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="date"
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="name"
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleNumberChange}
          placeholder="amount"
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="from"
        />
        <button type="submit">Create New Item</button>
      </form>
    </div>
  );
};

export default NewTransactionForm;
