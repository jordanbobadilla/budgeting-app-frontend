import Transaction from "./Transaction"

const Transactions = ({transactions}) => {
    let total = 0 
    transactions.forEach(transaction => total += transaction.amount)
    return (
        <div>
            <h1>Bank Account Total: {total}</h1>
            <ul>
                {transactions.map((transaction, i) => {
                    return <Transaction key={i} transaction={transaction} index={i}/>
                })}
            </ul>
        </div>
    )
}

export default Transactions