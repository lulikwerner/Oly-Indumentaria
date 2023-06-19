import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/whatsApp/whatsApp';
import CustomContainer from './components/Container/Container';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQS from './components/FAQS/FAQS';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <WhatsApp />
        <Routes>
          <Route path="/" element={<CustomContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/PreguntasFrecuentes" element={<FAQS />} />
        </Routes>
        <Footer className="footer-container" />
      </BrowserRouter>
    </>
  );
}

export default App;

