import React from 'react'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div className='navbar--container'>
        <div className='navbar--logo'>
            <a href="#"><img src={logo}></img></a>
        </div>
        <div className='navbar--menu'>
            <a href="#">Filmy</a>
            <a href="#">Seriale</a>
            <a href="#">Aktorzy</a>
        </div>
        <div class='input-group'>
          <input type="search" class="form-control rounded" placeholder="Szukaj..." aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-primary">Wyszukaj</button>
        </div>
        <div className='navbar--account'>
            <button>Konto</button>
        </div>
    </div>
  )
}

export default Navbar