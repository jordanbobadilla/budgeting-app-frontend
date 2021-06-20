import EditTransactionForm from "../components/EditTransactionForm"


const Edit = ({updateTransaction}) => {
    return (
        <section>
            <EditTransactionForm updateTransaction={updateTransaction} />
        </section>
    )
}

export default Edit