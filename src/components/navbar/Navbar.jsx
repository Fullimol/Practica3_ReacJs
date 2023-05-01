import React from 'react'
import NavbarItems from './NavbarItems'

const Navbar = (props) => {
    const { navbar_title, navbar_items } = props
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{navbar_title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navbar_items?.map(({ nombre, path }, index) => (
                            <NavbarItems nav_item={nombre} path={path} key={index} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar