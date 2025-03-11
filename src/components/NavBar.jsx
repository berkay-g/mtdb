import { Link } from "react-router-dom"
import "../css/Navbar.css"

function NavBar(params) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to='/'>
                    <img src="./favicon.png" alt="icon" className="navbar-image" />
                    MTDb
                </Link>
            </div>
            <div className="navbar-links">
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/favorites' className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar