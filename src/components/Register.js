import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='register--container'>
            <div className='register--form'>
                <p className='title'>Rejestracja</p>
                Login: <input type="text"></input>
                Nazwa: <input type="text"></input>
                Email: <input type="text"></input>
                Powtórz email: <input type="text"></input>
                Hasło: <input type="password"></input>
                Powtórz hasło: <input type="password"></input>
                <button class="btn btn-outline-primary">Rejestracja</button>
                <Link to='/signin'>Masz konto? Zaloguj się</Link>
            </div>
        </div>
  )
}