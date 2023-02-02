import React, { useState } from 'react';
import axios from 'axios'; //Importuje bibliotekę axios, która umożliwia wykonywanie zapytań HTTP.

export default function Add() {
  //Użycie funkcji useState do zarządzania stanem aplikacji. Inicjalne dane formularza są zdefiniowane jako obiekt z trzema właściwościami - title, content i image.
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: ''
  });

  //Funkcja umożliwiająca aktualizowanie danych formularza na podstawie wartości wprowadzonych przez użytkownika.
  const handleInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //Funkcja wywoływana po wysłaniu formularza. Wykonuje zapytanie HTTP typu POST do API z danymi formularza.
  const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://at.usermd.net/api/movies', {title:formData.title, content:formData.content, image:formData.image})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  //Część funkcji Add. Określa, co ma zostać zwrócone na ekran. W tym przypadku formularz dodania filmu.
  return (
    <div className='add--container'>
      <div className='add--form'>
        <p className='title'>Dodawanie filmu</p>
        <form onSubmit={handleSubmit} className='add--form'>
          Nazwa filmu: <input type='text' name='title' onChange={handleInputChange} />
          Opis: <input type='text' name='content' onChange={handleInputChange} />
          Link do zdjęcia: <input type='text' name='image' onChange={handleInputChange} />
          <button className='btn btn-outline-primary' type='submit'>
            Dodaj film
          </button>
        </form>
      </div>
    </div>
  );
}
