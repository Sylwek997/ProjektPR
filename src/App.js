import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";
import Add from "./components/Add"; //Importuje komponenty.
import { Routes, Route } from 'react-router-dom';
import React from 'react'; //Importuje moduł React
import { isExpired } from "react-jwt"; //Importuje moduł React

export default function App() {
  //W tym miejscu określa się, co ma zostać zwrócone na ekran.
  return (
    <div className="App">
      <div className="app--container">
      <Routes>
        <Route path="/" element={
          <React.Fragment>
            <Navbar />
            <Page />
            <Footer />
          </React.Fragment>
        }></Route>
        <Route path="/signin" element={<React.Fragment><Navbar /><Login /><Footer /></React.Fragment>}> </Route>
        <Route path="/signup" element={<React.Fragment><Navbar /><Register /><Footer /></React.Fragment>}> </Route>
        <Route path="/details/:id" element={<React.Fragment><Navbar /><Details /><Footer /></React.Fragment>}> </Route>
        <Route path="/add" element={isExpired(localStorage.getItem('token')) ? <App replace to="/"/> : <React.Fragment><Navbar /><Add /><Footer /></React.Fragment>}> </Route>
      </Routes>
      </div>
    </div>
  );
}

