import React, { useContext, useEffect, useState } from 'react'
import Button from '../../shared/Button'
import Input from '../../shared/Input'
import { ProductContext } from '../../context/ProductsProvider'

const Formulario = (props) => {
  const { inputs_form, form_button, form_titel, initialState, agregarSubmit, objetEntries,modificarSubmit } = props
  const { createProduct, editProduct } = useContext(ProductContext)


  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  useEffect(() => {
    setForm(initialState)
  }, [initialState])

// aca pongo la accion del submit
  const handleSubmit = (e) => {
    if (agregarSubmit) {
      e.preventDefault()
      createProduct(form)
      return
    } else if (modificarSubmit){
      editProduct(form) // NO ESTA FUNCIONANDO CORRECTAMENTE
      alert("MODIFICAR funcion")
      return
    } else
    // ACA TENGO QUE PONER LA FUNCION DE MODIFICAR PRODUCTO
      e.preventDefault()
      alert("sin funcion")
  }

  return (
    <form onSubmit={handleSubmit}>

      <h1>{form_titel}</h1>

      <div>
        {!objetEntries ? (inputs_form?.map(({ placeholder, id, name, type}, index) => (
          <Input
            className="p-2 "
            placeholder={placeholder}
            type={type}
            id={id}
            name={name}
            key={index}
            onChange={handleChange}
          />
        ))) : (Object.entries(inputs_form)?.map(([key, value]) => (
          <Input
            className="p-2 "
            name={key}
            key={key}
            onChange={handleChange}
            value={value}
          />
        )))}
        
        
      </div>

      <Button type="submit" className="btn btn-warning m-2" button_name={form_button} />
    </form>
  )
}

export default Formulario


// La funcion editProduct(objeto) no esta funcionando
// y el Formulario a la hora me modificar un producto, los Inputs no permiten ser modificados!!