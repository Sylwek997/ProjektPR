import React, { useState } from 'react'; //Importuje moduł React oraz hook useState z biblioteki React.
import { Link, useNavigate } from 'react-router-dom'; //Wczytywanie komponentu Link i hook'a useNavigate z biblioteki react-router-dom do nawigacji w aplikacji.
import axios from 'axios'; //Wczytywanie biblioteki axios do wysyłania żądań HTTP.

export default function Login() {
  const navigate = useNavigate(); //Deklaracja hook'a useNavigate do nawigacji w aplikacji.

  //Deklaracja hook'a useState do ustawiania stanu komponentu. Inicjalizacja stanu komponentu z pustymi danymi dla login, password.
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });

  //Deklaracja funkcji handleInputChange do ustawiania wartości danych formularza na podstawie zdarzenia zmiany.
  const handleInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault(); //Zapobieganie domyślnemu zachowaniu formularza (przeładowanie strony)
    //Wysłanie żądania do API z danymi potrzebnymi do zalogowania użytkownika. W przypadku powodzenia, token jest zapisywany w localStorage.
    axios.post('https://at.usermd.net/api/user/auth', {login:formData.login, password:formData.password})
      .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.token)
        navigate('/')
        window.location.reload()
      })
      .catch(error => {
        console.error(error);
      });
  };

  //Renderowanie komponentu formularza logowania
  return (
    <div className='login--container'>
      <div className='login--form'>
        <p className='title'>Logowanie</p>
        <form onSubmit={handleSubmit} className='login--form'>
          Login: <input type='text' name='login' onChange={handleInputChange} />
          Hasło: <input type='password' name='password' onChange={handleInputChange} />
          <button className='btn btn-outline-primary' type='submit'>
            Zaloguj
          </button>
        </form>
        <Link to='/signup'>Nie masz konta? Zarejestruj się</Link>
      </div>
    </div>
  );
}