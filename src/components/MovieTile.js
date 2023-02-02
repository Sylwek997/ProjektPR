import React from 'react'; //Importuje moduł React
import { useNavigate } from 'react-router-dom'; //Importuje hook useNavigate z biblioteki React Router DOM

export default function MovieTile(props) {
  const navigate = useNavigate(); //Deklaracja hook'a useNavigate do nawigacji w aplikacji.

  //Funkcja changeroute umożliwiająca zmianę trasy na trasę zawierającą /details/{props.data.id}.
  function changeroute() {
    navigate(`/details/${props.data.id}`)
  }

  //Część funkcji MovieTile. Określa, co ma zostać zwrócone na ekran.
  return (
    <div className='page--movie' onClick={changeroute}>
      <div className='page--poster'>
        <img src={props.data.image}></img>
      </div>
      <div className='page--text'>
        <p>{props.data.title}</p>
        <span>Rating</span>
        <span><b>9.9</b></span>
      </div>
    </div>
  )
}