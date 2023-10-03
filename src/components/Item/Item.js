import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
  return (
    <article className='CardItem'>
       <div className='ContainerItems'>
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
                    precio: {price}$
                </p>
                <p className='Info'>
                    Stock Disponible: {stock} u.
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
            </footer>
       </div>
        
    </article>
  )
}

export default Item;