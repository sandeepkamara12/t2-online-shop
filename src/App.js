import { createContext, useEffect, useState } from "react";
import "./assets/css/globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
// import "./assets/css/owl.carousel.css";
import "./assets/css/nouislider.css";
import "./assets/css/countdown.css";
import "./assets/css/style.css";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from "axios";
const myContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries");
  },[])

  const getCountry = async (url) => {
    await axios.get(url).then((res)=>setCountryList(res.data.data))
  }
  const value= {countryList, setSelectedCountry, selectedCountry};

  return (
    <BrowserRouter>
    <myContext.Provider value={value}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {myContext};