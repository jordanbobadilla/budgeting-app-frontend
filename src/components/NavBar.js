import { NavLink } from "react-router-dom"
import "../styles/NavBar.css"

const NavBar = () => {
    return(
        <header>
            <nav>
                <NavLink to={"/transactions"} className="title">Budget App</NavLink>
                <NavLink to={"/transactions/new"}>
                    <button>New Transaction</button>
                </NavLink>
            </nav>
        </header>
    )
}

export default NavBar