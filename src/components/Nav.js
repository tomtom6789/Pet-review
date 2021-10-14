import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
        <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/pets">Pets List</NavLink> </li>
                    <li><NavLink to="/pets/new">Pet Form</NavLink></li>
    
                </ul>
        </nav>
)
export default Nav
