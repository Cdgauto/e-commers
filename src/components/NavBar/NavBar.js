import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header className='Container'>      
          <Link to='/' className='Logo'>
              <h1><span>E- </span>Commers</h1>
          </Link>
          
          <div className='Categories'>
              <ul>
                <NavLink to={`/category/Celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celuleres</NavLink>
                <NavLink to={`/category/Ipad`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
              </ul>
          </div>

          <div className='Cart'>
              <CartWidget />
          </div>


      </header>
    </>
  );
};

export default NavBar;