import React from "react"
import {Link} from "react-router-dom"
import './Navbar.css'
function NavBar(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/RouteFinder">Route Finder</Link></li>
                <li><Link to="/SearchHistory">History</Link></li>
            </ul>
        </nav>

    );
}
export default NavBar;