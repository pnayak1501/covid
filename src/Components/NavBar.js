import React from "react"
import { Navbar,  NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar()
{
    return<>

    <nav className="navbar">
        <div className="nav-container">
            <NavLink exact to="/Statewise" className="nav-logo">
                Covid-19
            </NavLink>

            <ul className="nav-menu">
                
                <li className="nav-item">
                <NavLink exact to="/News" activeClassName="active" className="nav-links">
                News
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact to="/Vaccine" activeClassName="active" className="nav-links">
                Vaccine
                </NavLink>
                </li>
            </ul>
            
          
        </div>
    </nav>

    </>;
    
    
}

export default NavBar;

