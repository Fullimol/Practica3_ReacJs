import { useState } from 'react'
import { axiosClient } from '../axios/axios'

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [edit, setEdit] = useState(false)
    const [editProductFile, setEditProductFile] = useState(null)

    const getAllProducts = async () => {
        try {
            const res = await axiosClient('/productos')
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createProduct = async (objeto) => {
        try {
            const res = await axiosClient.post('/productos', objeto)
            getAllProducts()
            alert("Nuevo producto creado")
            console.log(products)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (id) => {
        try {
            const res = await axiosClient.delete(`/productos/${id}`)
            getAllProducts()
            alert("Producto Eliminado")
            setEdit(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditProduct = (objeto) => {
        setEdit(true)
        setEditProductFile(objeto)
    }

    const handleResetEditProduct = () => {
        setEdit(false)
        setEditProductFile(null)
    }

    const editProduct = async (objeto) => {
        try {
            const res = await axiosClient.put(`/productos/${objeto.id}`, objeto) 
            getAllProducts()
            alert("Producto Modificado")
            handleResetEditProduct()
        } catch (error) {
            console.log(error)
        }
    } 

    return {
        products,
        getAllProducts,
        createProduct,
        handleEditProduct,
        edit,
        editProductFile,
        deleteProduct,
        handleResetEditProduct,
        editProduct
    }
}

export default useProducts