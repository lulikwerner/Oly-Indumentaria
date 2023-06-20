import React from 'react';
import '../Navbar/Navbar.css';
import logo from '../../../public/assets/img/logo.png';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="container-Nav">
        <div>
          <NavLink to="/" className="Option-Nav" activeclassname="active">Inicio</NavLink>
          <a href="https://wa.me/+541136806292?text=hola%20lu%20te%20consulto%20por%20este%20producto" className="Option-Nav">Productos</a>
        </div>
        <div className="centered-logo">
        <Link to="/">
            <img className="imagen-Logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <NavLink to="/PreguntasFrecuentes" className="Option-Nav" activeclassname="active">Preguntas Frecuentes</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


