import React from 'react'
import CardsContainer from '../components/products/CardsContainer'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductsProvider'
import Formulario from '../components/form/Formulario'
import Button from '../shared/Button'

const Home = () => {
  const {edit, editProductFile, deleteProduct, handleResetEditProduct} = useContext(ProductContext)

console.log(editProductFile)

  return (
    <div>
      <h1 className='text-danger'>Este es el HOME</h1>

      {edit ? (
      <div className='text-center'>
        <h1>Editar producto</h1>
        <Formulario
        objetEntries
        modificarSubmit
        inputs_form={editProductFile}
        form_button={"Modificar producto"}
        />

        <Button 
        button_name="Eliminar producto"
        className= "btn btn-danger m-1"
        onClick={() => deleteProduct(editProductFile.id)}
        />
        <Button 
        button_name="Cancelar"
        onClick={() => handleResetEditProduct()}
        />
      </div>
      
      
      ) : <CardsContainer />}
      

    </div>

  )
}

export default Home