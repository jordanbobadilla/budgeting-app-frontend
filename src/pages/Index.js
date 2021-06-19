import Transactions from "../components/Transactions"
import "../styles/Index.css"

const Index = ({transactions}) => {
    return (
        <section className="index">
            <Transactions transactions={transactions}/>
        </section>
    )
} 

export default Index
