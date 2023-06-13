import './App.css'
import Footer from './components/Footer/Footer'
import CustomContainer from './components/Container/Container'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {


  return (

    <BrowserRouter>
        <CustomContainer/>
        <Footer/>
      </BrowserRouter>

  )
}

export default App;
