import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayoutRoute from './MainLayoutRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Favorites from '../pages/Favorites'
import ProductsProvider from '../context/ProductsProvider'
import Agregar from '../pages/Agregar'


const Rutas = () => {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Routes>

          <Route path='/' element={<MainLayoutRoute navbar_title={"Practica 3"} />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='agregar' element={<Agregar />} />
          </Route>

        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  )
}

export default Rutas