import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductsProvider'
import Card from './Card'


const CardsContainer = () => {
    const { products, addFavorite, deleteFavorite, isInFavorite, handleEditProduct } = useContext(ProductContext)

    return (
        <div>

            {products?.map((producto) => (
                <Card key={producto.id}
                    {...producto}
                    addFavorite={addFavorite}
                    deleteFavorite={deleteFavorite}
                    isInFavorite={isInFavorite}
                    handleEditProduct={handleEditProduct}
                />
            ))}

        </div>
    )
}

export default CardsContainer