import React, { useContext } from 'react'
import Formulario from '../components/form/Formulario'
import { ProductContext } from '../context/ProductsProvider'

const productsInputs = [
    {
        name: "marca",
        placeholder: "marca",
        type: "text"
    },
    {
        name: "modelo",
        placeholder: "modelo",
        type: "text"
    },
    {
        name: "precio",
        placeholder: "precio",
        type: "num"
    }
]

const Agregar = () => {


    return (
        <div>
            <h1 className='text-center text-warning'> Agregar producto </h1>
            <Formulario
                
                inputs_form={productsInputs}
                form_button={"Agregar producto"}
                agregarSubmit
            />
        </div>
    )
}

export default Agregar