import React from 'react'
import '../Navbar/Navbar.css'
import retratopersona from '../../../public/assets/img/retratopersona.jpg'
import logo from '../../../public/assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header style={style.container}>
      <nav>
        <a style={style.categorias} href="">Productos</a>
        <Link to="/">
        <img style={style.imagenLogo} src={logo} alt="logo" />
        </Link>
        <a style={style.categorias} href="">Preguntas Frecuentes</a>
      </nav>
    </header>
    <img style={style.imagen} src={retratopersona} alt="home" />
    </>
  )
}

export default Navbar

const style = {
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '11%',
    width: '100%',
  },
  imagenLogo:{
    width: '10%',
    margin: '1%'
  },
  imagen:{
    width: '100%'
  },
  categorias:{
    margin: 200
  }
}