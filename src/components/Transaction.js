import { Link } from "react-router-dom";

const Transaction = ({ transaction, index }) => {
  return (
    <li>
      <div className="list">
        <div>
          <p className="date">{transaction.date}</p>
          <Link to={`/transactions/${index}`}>{transaction.name}</Link>
        </div>
        <p>{transaction.amount}</p>
      </div>
      <hr />
    </li>
  );
};

export default Transaction;
