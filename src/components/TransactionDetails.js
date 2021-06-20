import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransactionDetails = ({deleteTransaction}) => {
  let { index } = useParams();
  let history = useHistory();
  const [transaction, setTransaction] = useState({});

  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      setTransaction(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, [index]);

  const handleDelete = () => {
      deleteTransaction(index)
      history.push("/transactions")
  }

  return (
    <div>
      <div className="details">
        <p>From: {transaction.from}</p>
        <p>Name: {transaction.name}</p>
        <p>Amount: {transaction.amount}</p>
        <p>Date: {transaction.date}</p>
      </div>
      <div className="buttons">
          <button onClick={() => history.goBack()}>Back</button>
          <button onClick={() => history.push(`${index}/edit`)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TransactionDetails;
