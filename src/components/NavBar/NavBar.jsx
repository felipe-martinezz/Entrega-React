import React from 'react'
import "./navbar.css"

function NavBar() {
  return (
    <div className="navbar">
          <h2>
            <strong className='title'>Todo PC</strong>   
          </h2>  
        <nav className='nav'>
          <ul className='nav__lista'>
            <li className='nav__item'>Inicio</li>
            <li className='nav__item'>Productos</li>
            <li className='nav__item'>Nosotros</li>
            <li className='nav__item'>Contacto</li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar