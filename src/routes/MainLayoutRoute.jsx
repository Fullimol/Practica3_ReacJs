import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayoutRoute = (props) => {
    const { navbar_title, navbar_items } = props
    return (

        <>
            <Navbar
                navbar_title={navbar_title || "(sin titulo)"}
                navbar_items={navbar_items || [
                    { nombre: "inicio", path: "/" },
                    { nombre: "Favoritos", path: "/favorites" },
                    { nombre: "Login", path: "/login" },
                    { nombre: "Agregar", path: "/agregar"}
                ]}
            />

            <Outlet />
        </>

    )
}

export default MainLayoutRoute