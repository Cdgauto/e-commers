import React from 'react'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <>
      <header className='Container'>      
          <div className='Logo'>
              <h1><span>E- </span>Commers</h1>
          </div>
          
          <nav className='navbar'>
              <ul>
                <li><a href='#'><span>Home</span></a></li>
                <li><a href='#'>Compras</a></li>
                <li><a href='#'>Stock</a></li>
              </ul>
          </nav>

          <div className='Cart'>
              <CartWidget />
          </div>


      </header>
    </>
  );
};

export default NavBar;