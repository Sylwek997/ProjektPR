import React from 'react';

export default function Add() {
  return (
    <div className='add--container'>
                <div className='add--form'>
                    <p className='title'>Dodawanie filmu</p>
                    Nazwa filmu: <input type="text"></input>
                    Opis: <input type="text"></input>
                    Reżyser: <input type="text"></input>
                    Rok produkcji: <input type="text"></input>
                    Gatunek: <input type="text"></input>
                    Aktorzy: <input type="text"></input>
                    Link do zdjęcia: <input type="text"></input>
                    <button class="btn btn-outline-primary">Dodaj film</button>
                </div>
            </div>
  )
}