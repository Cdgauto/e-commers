import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
  return (
    <article className='ItemCard'>
       <div className='ItemContainer'>
            <header className='Header'>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Categoría: {category}
                </p>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Precio: {price}$
                </p>
            </section>
            <footer className='FooterItem'>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
            </footer>
       </div>
        
    </article>
  )
}

export default ItemDetail;