import React, { useState } from 'react'; //Importuje moduł React oraz hook useState z biblioteki React.
import { Link, useNavigate } from 'react-router-dom'; //Wczytywanie komponentu Link i hook'a useNavigate z biblioteki react-router-dom do nawigacji w aplikacji.
import axios from 'axios'; //Wczytywanie biblioteki axios do wysyłania żądań HTTP.

export default function Register() {
  const navigate = useNavigate(); //Deklaracja hook'a useNavigate do nawigacji w aplikacji.

  //Deklaracja hook'a useState do ustawiania stanu komponentu. Inicjalizacja stanu komponentu z pustymi danymi dla login, email, password, repeatPassword.
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  //Deklaracja funkcji handleInputChange do ustawiania wartości danych formularza na podstawie zdarzenia zmiany.
  const handleInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //Funkcja obsługująca wysłanie formularza rejestracji
  const handleSubmit = event => {
    event.preventDefault(); //Zapobieganie domyślnemu zachowaniu formularza (przeładowanie strony)
    if (formData.password !== formData.repeatPassword) {
      alert('Hasła nie są takie same!');
      return;
    }
    //Wysłanie żądania do API z danymi potrzebnymi do utworzenia użytkownika.
    axios.post('https://at.usermd.net/api/user/create', {name:formData.login, email:formData.email, password:formData.password})
      .then(response => {
        console.log(response.data);
        navigate('/signin')
      })
      .catch(error => {
        console.error(error);
      });
  };

  //Renderowanie komponentu formularza rejestracji
  return (
    <div className='register--container'>
      <div className='register--form'>
        <p className='title'>Rejestracja</p>
        <form onSubmit={handleSubmit} className='register--form'>
          Login: <input type='text' name='login' onChange={handleInputChange} /><br/>
          Email: <input type='text' name='email' onChange={handleInputChange} /><br/>
          Hasło: <input type='password' name='password' onChange={handleInputChange} /><br/>
          Powtórz hasło: <input type='password' name='repeatPassword' onChange={handleInputChange} /><br/>
          <button className='btn btn-outline-primary' type='submit'>
            Rejestracja
          </button>
        </form>
        <Link to='/signin'>Masz konto? Zaloguj się</Link>
      </div>
    </div>
  );
}