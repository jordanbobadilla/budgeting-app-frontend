import NewTransactionForm from "../components/NewTransactionForm"
import "../styles/New.css"

const New = ({addTransaction}) => {
    return (
        <section>
            <NewTransactionForm addTransaction={addTransaction}/>
        </section>
    )
}

export default New