import { createContext, useEffect } from "react"
import useFavorites from "../hooks/useFavorites"
import useProducts from "../hooks/useProducts"

export const ProductContext = createContext("")

const ProductsProvider = ({ children }) => {
    const { favorites, getAllFavorites, deleteFavorite, addFavorite, isInFavorite } = useFavorites()
    const { products, getAllProducts, createProduct, handleEditProduct, edit, editProductFile, deleteProduct,handleResetEditProduct, editProduct } = useProducts()

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <ProductContext.Provider value={{
            favorites,
            products,
            edit,
            editProductFile,
            getAllFavorites,
            getAllProducts,
            deleteFavorite,
            addFavorite,
            isInFavorite,
            createProduct,
            handleEditProduct,
            deleteProduct,
            handleResetEditProduct,
            editProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsProvider