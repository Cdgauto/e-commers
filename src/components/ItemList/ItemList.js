import React from 'react'
import '../ItemList/ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  
  console.log(products)

  return (
    <div className='ListGroup'>
        {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList