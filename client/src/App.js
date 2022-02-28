import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./component/header/Header";
import BreadCrumbs from "./component/header/BreadCrumbs";
import LandingPage from "./component/LandingPage";
import Login from "./component/authentication/Login";
import Register from "./component/authentication/Register";
import Footer from "./component/footer/Footer";
import Contact from "./component/Contact";
import ProductsList from "./component/products/ProductsList";
import AboutPage from "./component/about_page/AboutPage";
import CartList from "./component/header/CartList";

const App = () => {
  const [listItems, setListItems] = useState([]);

  //Update the cart with new selected items 
  const handleAddItemToList = (item) => {
    setListItems([...listItems, item]);
  };

  return (
    <div>
      <Header listItems={listItems} />
      <BreadCrumbs />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/store"
          element={<ProductsList addItemToList={handleAddItemToList} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/store/cart"
          element={<CartList listItems={listItems} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
