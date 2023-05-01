import { useEffect, useState } from "react"
import { axiosClient } from "../axios/axios"

const useFavorites = () => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        getAllFavorites()
    }, [])


    const getAllFavorites = async () => {
        try {
            const res = await axiosClient('/favoritos')
            setFavorites(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addFavorite = async (objeto) => {
        try {
            const res = await axiosClient.post('/favoritos', objeto)
            getAllFavorites()
            alert("agregado a favorito")
        } catch (error) {
            console.log(error)
        }
    }


    const deleteFavorite = async (id) => {
        try {
            const res = await axiosClient.delete(`/favoritos/${id}`)
            getAllFavorites()
            alert("Eliminado de favorito")
        } catch (error) {
            console.log(error)
        }
    }

    const isInFavorite = (id) => favorites.some((favorito) => favorito.id === id)

    return {
        favorites,
        getAllFavorites,
        addFavorite,
        deleteFavorite,
        isInFavorite
    }
}

export default useFavorites