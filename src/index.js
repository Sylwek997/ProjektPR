import React from 'react'; //Importuje moduł React
import ReactDOM from 'react-dom/client'; //Importuje moduł ReactDOM z biblioteki 'react-dom/client'.
import './index.css'; //Importuje plik CSS "./index.css".
import App from './App'; //Importuje główny komponent App z pliku "./App".
import 'bootstrap/dist/css/bootstrap.min.css'; //Importuje plik CSS Bootstrap "bootstrap/dist/css/bootstrap.min.css".
import { BrowserRouter } from 'react-router-dom'; //Importuje moduł BrowserRouter z biblioteki 'react-router-dom'.

//Definicja zmiennej root i użycie funkcji createRoot() , aby utworzyć korzeń drzewa renderowania w elemencie o identyfikatorze "root".
const root = ReactDOM.createRoot(document.getElementById('root'));
//Funkcja render() na zmiennej root renderuje aplikację w trybie ścisłym (StrictMode) z użyciem BrowserRouter.
root.render(
  //Tu zawarty jest komponent App, który jest głównym komponentem aplikacji.
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
