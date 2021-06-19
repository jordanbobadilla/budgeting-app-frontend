import { Link } from "react-router-dom";

const Transaction = ({ transaction, index }) => {
  return (
    <li>
      <div>
        <div>
          <p className="date">{transaction.date}</p>
          <Link>{transaction.name}</Link>
        </div>
        <p>{transaction.amount}</p>
      </div>
      <hr />
    </li>
  );
};

export default Transaction;
