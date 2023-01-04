import React from 'react';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {

const navigate = useNavigate();
  function changeroute() {
    navigate('/signin')
  }
  return (
    <div className='navbar--container'>
        <div className='navbar--logo'>
            <Link to="/"><img src={logo}></img></Link>
        </div>
        <div className='navbar--menu'>
            <a href="#">Filmy</a>
            <a href="#">Seriale</a>
            <a href="#">Aktorzy</a>
            <Link to="/add">Dodaj film</Link>
        </div>
        <div class='input-group'>
          <input type="search" class="form-control" placeholder="Szukaj..." aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-primary">Wyszukaj</button>
        </div>
        <div className='navbar--account' onClick={changeroute}>
            <button>Konto</button>
        </div>
    </div>
  )
}

export default Navbar