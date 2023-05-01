import React from 'react'
import { AiOutlineHeart, AiFillHeart, AiFillDelete, AiFillEdit } from 'react-icons/ai'

const Card = (props) => {
    const { marca, modelo, precio, id, addFavorite, deleteFavorite, isInFavorite, inFavorite, handleEditProduct } = props
    return (
        <div className="card m-1 w-50">
            <div className='d-flex'>
                <div className="card-body">
                    <p>id: {id}</p>
                    <h5 className="card-title">marca: {marca}</h5>
                    <h6 className="card-text">modelo: {modelo}</h6>
                    <h5>precio: {precio}</h5>
                </div>
                <div>
                    {/* Muestra corazon negro */}
                    {!inFavorite && isInFavorite(id) && (
                        <button onClick={() => deleteFavorite(id)} className='btn fs-3'>
                            <AiFillHeart />
                        </button>
                    )}
                    {/* Muestra corazon blanco */}
                    {!inFavorite && !isInFavorite(id) && (
                        <div>
                            <button onClick={() => handleEditProduct({ marca, modelo, precio, id })} className='btn fs-3'> 
                                <AiFillEdit />
                            </button>

                            <button onClick={() => addFavorite({ marca, modelo, precio, id })} className='btn fs-3'>
                                <AiOutlineHeart />
                            </button>
                        </div>


                    )}
                    {/* Muestra tachito */}
                    {inFavorite && isInFavorite(id) && (
                        <button onClick={() => deleteFavorite(id)} className='btn fs-3'>
                            <AiFillDelete />
                        </button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Card