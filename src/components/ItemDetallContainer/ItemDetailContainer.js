import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById, getProducts } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        getProductById('1')
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[])
  
    return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...products} />
    </div>
  )
}

export default ItemDetailContainer