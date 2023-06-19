import React from 'react';
import '../Navbar/Navbar.css';
import logo from '../../../public/assets/img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="container-Nav">
        <div>
          <Link to="/" className="Option-Nav">Inicio</Link>
          <Link to="https://wa.me/+541136806292?text=hola%20lu%20te%20consulto%20por%20este%20producto" className="Option-Nav">Productos</Link>
        </div>
        <div className="centered-logo">
          <Link to="/">
            <img className="imagen-Logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <Link to="/PreguntasFrecuentes" className="Option-Nav">Preguntas Frecuentes</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

