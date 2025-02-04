import { createContext, useEffect, useState } from "react";
import "./assets/css/globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
// import "./assets/css/owl.carousel.css";
import "./assets/css/nouislider.css";
import "./assets/css/countdown.css";
import "./assets/css/style.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import Shop from "./pages/Shop";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
const myContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const closeModalFn = () => {
    document.body.classList.remove("modal-open");
    document.body.classList.remove("adjust-padding");
    setOpenModal(false);
  };

  const openModalFn = () => {
    document.body.classList.add("modal-open");
    document.body.classList.add("adjust-padding");
    setOpenModal(true);
  };
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    await axios.get(url).then((res) => setCountryList(res.data.data));
  };
  const value = { countryList, setSelectedCountry, selectedCountry };

  return (
    <BrowserRouter>
      <myContext.Provider value={value}>
        <Provider store={store}>
          <Header openModalFn={openModalFn} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
          </Routes>
          <Footer openModal={openModal} closeModalFn={closeModalFn} />
        </Provider>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { myContext };
