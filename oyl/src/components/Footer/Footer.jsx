import React from 'react';
import '../Footer/Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TiLocationOutline } from 'react-icons/ti';
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs'
import {GoTriangleRight} from 'react-icons/go';
import { Link } from "react-router-dom";



function Footer() {
  return (
    <footer className="footer">
      <section className="top-container">
      <div className="containe-f text-center text-md-start mt-5 ">
  <div className="row mt-3 top-container  tit">
    <div className=" col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto mb-4 ml-auto mr-4 media">
              <h6 className="text-uppercase fw-bold mb-4 titR custom">
               RETIRO COMPRA ONLINE</h6>
              <div className="location-container">
                <p className="moticon">
                  <TiLocationOutline className="location-icon icon-retiro" />
                  <span className="bold-text ">Héctor Arregui 2523, José C. Paz</span><br></br>
                  <span className="time-text text">Lunes a Viernes 16:00 a 19:30</span>
                </p>
              </div>
              <div className="location-container">
                <p className="moticon">
                  <TiLocationOutline className="location-icon icon-retiro" />
                  <span className="bold-text ">Nazca 2779 1B, Villa del Parque </span><br></br>
                  <span className="time-text text">Lunes a Viernes 9:30 a 17:00</span>
                </p>
              </div>
              <div className="location-container">
                <p className="moticon">
                  <TiLocationOutline className="location-icon icon-retiro" />
                  <span className="bold-text ">Héctor Arregui 2523, José C. Paz </span><br></br>
                  <span className="time-text text">Lunes a Viernes 16:00 a 19:30</span>
                </p>
              </div>


            </div>
            <div className=" col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto mb-4 media">
              <h6 className="text-uppercase fw-bold mb-4 metodos-pago custom-h6">
                <span>MÉTODOS DE PAGO</span></h6>
              <p className=" text">
                  EFECTIVO
              </p>
              <p className=" text">
                  TRANSFERENCIAS
              </p>
              <p className=" text">
                  Mercado Pago (con recargos)
              </p>
              <p className=" text">
                  UALÁ (Cuotas sin interés)
              </p>
            </div>
           <div className=" col-sm-12 col-md-6 col-lg-2 col-xl-2 mx-auto mb-4 media">
              <h6 className="text-uppercase fw-bold mb-4 tit custom-h6 ">SEGUINOS</h6>


              <div className="social-icon text">
                <a className="social-icon facebook" href="https://www.facebook.com/profile.php?id=100070583535301&mibextid=LQQJ4d">
                  <BsFacebook className="icon text" size={24} />
                </a>
                <a className="social-icon instagram" href="https://www.instagram.com/oyl_indumentariacanchera/">
                  <BsInstagram className="icon" size={24} />
                </a>
                <a className="social-icon tiktok" href="https://www.tiktok.com/@oylindumentariachera?_t=8cN4v4cw2qM&_r=1">
                  <BsTiktok className="icon" size={24} />
                </a>
              </div>
            </div>
            <div className=" col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto mb-4 mr-auto media">
              <h6 className="text-uppercase fw-bold mb-4 titR  custom-preg">PREGUNTAS FRECUENTES</h6>
              <p className="faq-item">
              <GoTriangleRight className="location-icon text" />
                <Link to={`/PreguntasFrecuentes#quienes-somos`}  className="text-reset">
                ¿QUIÉNES SOMOS?
                </Link>
              </p>
              <p className="faq-item">
              <GoTriangleRight className="location-icon text" />
              <Link to={`/PreguntasFrecuentes`} className="text-reset">
                ¿COMO REALIZAR UN PEDIDO?
                </Link>
              </p>
              <p className="faq-item">
              <GoTriangleRight className="location-icon text" />
              <Link to={`/PreguntasFrecuentes`} className="text-reset">
                  PAGO
                  </Link>
              </p>
              <p className="faq-item">
              <GoTriangleRight className="location-icon text" />
              <Link to={`/PreguntasFrecuentes`} className="text-reset">
                  ENVÍO
                  </Link>
              </p>
              <p>
              <GoTriangleRight className="location-icon text" />
              <Link to={`/PreguntasFrecuentes`} className="text-reset">
                  CAMBIOS
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="p-4  line-container">
  <p className="bottom"> 
    <span  style={{ color: "#F5037C", fontWeight: "bold" }}>DISEÑADO POR: </span>
    <span>LAURA SALAS & MÓNICA BRAVO</span>
  </p>

    <p className="bottom">
      <span  style={{ color: "#FF5601", fontWeight: "bold" }}>DESARROLLADO POR: </span>
      <span>LUCILA WERNER & GIANCARLO OBLITAS</span>
    </p>
  
</div>
    </footer>
  );
}

export default Footer;
