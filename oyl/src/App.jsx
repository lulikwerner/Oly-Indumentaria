import './App.css'
import Footer from './components/Footer/Footer'
import CustomContainer from './components/Container/Container'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQS from "./components/FAQS/FAQS"

function App() {


  return (

    <BrowserRouter>
    <Routes>
    <Route
            path="/"
            element={
              <CustomContainer/>
            }
          />
       <Route path="*" element={<Navigate to="/" />} />
       <Route path="/PreguntasFrecuentes" element={<FAQS/>} />
        </Routes>
        <Footer className="footer-container" />
      </BrowserRouter>

  )
}

export default App;
