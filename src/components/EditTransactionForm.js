import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const EditTransactionForm = ({ updateTransaction }) => {
  let history = useHistory();
  let { index } = useParams();
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
    updateTransaction(transaction, index);
    history.push("/transactions");
  };

  
  useEffect(() => {
      const fetchTransaction = async () => {
        try {
          const res = await axios.get(`${API}/transactions/${index}`);
          setTransaction(res.data);
        } catch (error) {
          console.log(error);
        }
      };
    fetchTransaction();
  }, [index]);

  return (
    <div className="new">
      <h1>Edit this transaction</h1>
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
        <button type="submit">Edit Item</button>
      </form>
    </div>
  );
};

export default EditTransactionForm;