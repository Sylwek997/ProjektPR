import React from 'react'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div className='navbar--container'>
        <div className='navbar--logo'>
            <img src={logo}></img>
        </div>
        <div className='navbar--menu'>
            <a href="#">Filmy</a>
            <a href="#">Seriale</a>
            <a href="#">Aktorzy</a>
        </div>
        <div className='navbar--account'>
            <button>Konto</button>
        </div>
    </div>
  )
}

export default Navbar