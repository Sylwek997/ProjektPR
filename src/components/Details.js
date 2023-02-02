import React, { useEffect, useState } from 'react' //Importuje moduł React oraz hooki useEffect i useState z biblioteki React.
import { useNavigate, useParams } from 'react-router-dom'; //Import hooków useNavigate i useParams z biblioteki React Router DOM
import axios from 'axios'; //Importuje bibliotekę axios, która umożliwia wykonywanie zapytań HTTP.

export default function Details(props) {
  const [token, setToken] = useState(null); //Deklaruje stan aplikacji token z wartością początkową null i funkcję setToken do zmiany stanu.
  const navigate = useNavigate(); //Użycie hooka useNavigate do zapisania funkcji do zmiany trasy aplikacji
  const {id} = useParams(); //Użycie hooka useParams do pobierania parametrów z URL.
  const [data, setData] = useState({}); //Użycie hooka useState do przechowywania danych filmu jako stanu.

  /*
  Użycie hooka useEffect do wykonania kodu po każdym renderze komponentu. Kod ten:
  Pobiera token z local storage i ustawia go w stanie token
  Wykonuje żądanie HTTP typu GET za pomocą biblioteki axios, aby pobrać informacje o filmie o danym id
  Ustawia otrzymane dane w stanie data
  */
  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
    axios.get(`https://at.usermd.net/api/movies/${id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  // Tworzenie funkcji removeMovie, która usuwa film za pomocą metody DELETE.
  const removeMovie = () => {
    axios.delete(`https://at.usermd.net/api/movie/${data.id}`)
      .then(response => {
        console.log(response.status);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  //Część funkcji Details. Określa, co ma zostać zwrócone na ekran.
  return (
    <div className='page--movie'>
      <div className='page--poster'>
        <img src={data.image}></img>
      </div>
      <div className='page--text'>
        <p>{data.title}</p>
        <span>{data.content}</span>
        <span>Rating</span>
        <span><b>9.9</b></span>
      </div>
      {token && <button onClick={removeMovie}>Usuń</button>}
    </div>
  )
}