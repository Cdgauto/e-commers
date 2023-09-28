import React from 'react'
import '../Item/Item.css'

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
                <button className='Option'>Ver detalle</button>
            </footer>
       </div>
        
    </article>
  )
}

export default Item;