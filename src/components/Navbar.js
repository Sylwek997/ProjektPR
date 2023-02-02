import React, { useEffect, useState } from 'react' //Importuje moduł React oraz hooki useEffect i useState z biblioteki React.
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { Link  } from 'react-router-dom'; //Importuje hook useNavigate i komponent Link z biblioteki React Router DOM.

export default function Navbar() {
  const [token, setToken] = useState(null); //Deklaruje stan aplikacji token z wartością początkową null i funkcję setToken do zmiany stanu.
  const navigate = useNavigate(); //Użycie hooka useNavigate do zapisania funkcji do zmiany trasy aplikacji

  //Hook useEffect jest wykonywany po każdej renderacji komponentu. Pobiera token z localStorage i ustawia go jako stan aplikacji za pomocą setToken.
  useEffect(() => {
      const token = localStorage.getItem('token');
      setToken(token);
  }, [])

  //Funkcja changeroute przekształca obecną ścieżkę na ścieżkę /signin za pomocą hooku navigate.
  function changeroute() {
    navigate('/signin');
  }

  //Funkcja logout usuwa token z localStorage i przeładowuje stronę.
  function logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  //Część funkcji Navbar. Określa, co ma zostać zwrócone na ekran.
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
        <input type="search" class="form-control form-control-custom" placeholder="Szukaj..." aria-label="Search" aria-describedby="search-addon" />
        <button type="button" class="btn btn-outline-primary">Wyszukaj</button>
      </div>
      {!token ? (
        <div className='navbar--account' onClick={changeroute}>
          <button>Zaloguj</button>
        </div>
      ):(
        <div className='navbar--account' onClick={logout}>
          <button>Wyloguj</button>
        </div>)
      }
    </div>
  )
}