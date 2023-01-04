import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login--container'>
            <div className='login--form'>
                <p className='title'>Logowanie</p>
                Login: <input type="text"></input>
                Hasło: <input type="password"></input>
                <button class="btn btn-outline-primary">Zaloguj</button>
                <Link to='/signup'>Nie masz konta? Zarejestruj się</Link>
            </div>
        </div>
  )
}
