import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarItems = (props) => {
    const {nav_item, path} = props
    return (
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" href="#" to={path}>{nav_item}</NavLink>
        </li>

    )
}

export default NavbarItems