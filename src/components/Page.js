import React, { useEffect, useState } from 'react'; //Importuje moduł React oraz hooki useEffect i useState z biblioteki React.
import axios from 'axios'; //Importuje bibliotekę axios, która umożliwia wykonywanie zapytań HTTP.
import MovieTile from './MovieTile'; //Importuje komponent MovieTile z pliku ./MovieTile.js.

export default function Page() {
  //Trzy stany zostały zdefiniowane za pomocą hook'a useState
  const [data, setData] = useState([]); //data - początkowy stan jest pustą tablicą
  const [movies, setMovies] = useState([]); //movies - początkowy stan jest pustą tablicą
  const [showMovies, setShowMovies] = useState(null); //showMovies - początkowy stan jest ustawiony na null

  //Pierwszy useEffect jest wykonywany po zamontowaniu komponentu. Wykonuje zapytanie HTTP za pomocą axios GET i ustawia stan data na otrzymane dane.
  useEffect(() => {
    axios.get('https://at.usermd.net/api/movies')
      .then(res => {
        setData(res.data);
      })
      .catch(err =>{
        console.log(err)
      })
  }, []) //Oznacza, że ten efekt jest wykonywany tylko raz po zamontowaniu komponentu.

  // Użycie hooka useEffect do wykonania efektu po renderowaniu komponentu
  useEffect(() => {
    const moviesArray = []; // Tworzenie tablicy filmów
    data.forEach(movie => { // Iterowanie przez każdy film w data
      if(movie.image) {
        if(movie.image.slice(0,3) === "htt" && movie.content !== "" && movie.title !== "") {
          moviesArray.push(movie) // Dodawanie filmu do tablicy moviesArray
        }
      }
    })
    setMovies(moviesArray); // Ustawianie tablicy filmów w stanie komponentu
    setShowMovies(moviesArray.map((movie, i) => { // Ustawianie tablicy filmów, które mają być wyświetlone na stronie
      // Zwracanie komponentu MovieTile dla każdego filmu w tablicy moviesArray
      return (
        <div key={i}>
        <MovieTile data={movie} />
        </div>
      )
    }))
  }, [data]) //[data] jest tablicą zależności, co oznacza, że efekt jest wykonywany tylko wtedy, gdy data się zmienia

  //Część funkcji Page. Określa, co ma zostać zwrócone na ekran.
  return (
    <div className='page--container'>
      {showMovies}
    </div>
  )
}
