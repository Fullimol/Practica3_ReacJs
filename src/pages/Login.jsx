import React, { useState } from 'react'
import Formulario from '../components/form/Formulario'
import { dataLoginInputs, dataRegisterInputs, dataLogin, dataRegister } from '../components/form/LoginConfig'
import Button from '../shared/Button'


const Login = () => {
    const [showForm, setShowForm] = useState(false)

    // Es la funcion que se ejecuta al enviar el Formulario Dinamico. 
    const handleSubmit = (e, data) => {
        e.preventDefault(); //evitamos que envíe la info y recargue la página
        console.log(data)
    }

    return (
        <div className='text-center'>

            <Button
                className="btn btn-primary m-2"
                button_name={showForm ? "ir a Login" : "ir a Register"}
                onClick={() => setShowForm(!showForm)}
            />

            <Formulario
                inputs_form={showForm ? dataRegisterInputs : dataLoginInputs}
                tittle_form="Login"
                form_button={showForm ? "Crear usuario" : "Iniciar Sesion"}
                form_titel={showForm ? "Register" : "Login"}
                onSubmit={handleSubmit}
                initialState={showForm ? dataRegister : dataLogin}
            />

        </div>
    )
}

export default Login