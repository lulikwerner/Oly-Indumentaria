import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/assets/img/logo.png';
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">
            <NavLink to="/" className="logo">
              <img src={logo} alt="OYL logo" />
            </NavLink>
          </li>
          <input type="checkbox" id="check" />
          <div className="menu">
            <li className="inicio">
            <NavLink to="/" className="Option-Nav" activeclassname="active">Inicio</NavLink>
            </li>
            <div className="produNav">
          <a href="https://wa.me/+541136806292?text=hola%20lu%20te%20consulto%20por%20este%20producto" className="Option-Nav">Productos</a>
        </div>
            <li className="pregFrec">
            <NavLink to="/PreguntasFrecuentes" className="Option-Nav" activeclassname="active">Preguntas Frecuentes</NavLink>
           </li>
          
            <label htmlFor="check" className="close-menu">
              <i className="fas fa-times"></i>
            </label>
          </div>
          <label htmlFor="check" className="open-menu">
            <i className="fas fa-bars"></i>
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;





