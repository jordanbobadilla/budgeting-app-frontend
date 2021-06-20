import TransactionDetails from "../components/TransactionDetails"
import "../styles/Show.css"

const Show = ({deleteTransaction}) => {
    return (
        <section className="show">
            <h1>Transaction Details</h1>
            <TransactionDetails deleteTransaction={deleteTransaction}/>
        </section>
    )
}
export default Show