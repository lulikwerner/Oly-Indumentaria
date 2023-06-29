import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/whatsApp/whatsApp';
import CustomContainer from './components/Container/Container';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQS from './components/FAQS/FAQS';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      console.log(section);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

  setTimeout(() => {
    scrollToSection('section1');
  }, 1000);
}, []); 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <WhatsApp />
        <Routes>
          <Route path="/" element={<CustomContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/PreguntasFrecuentes" onClick={() => scrollToSection('section1')} element={<FAQS />} />
        </Routes>
        <Footer className="footer-container" />
      </BrowserRouter>
    </>
  );
}

export default App;

