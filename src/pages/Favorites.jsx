import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductsProvider'
import Card from '../components/products/Card'

const Favorites = () => {
    const { favorites, deleteFavorite, isInFavorite } = useContext(ProductContext)

    console.log(favorites)
    return (
        <div>
            <h1>Favoritos:</h1>
            {favorites?.map((producto) => (
                <Card key={producto.id}
                    {...producto}
                    deleteFavorite={deleteFavorite}
                    isInFavorite={isInFavorite}
                    inFavorite
                />
            ))}
        </div>
    )
}

export default Favorites