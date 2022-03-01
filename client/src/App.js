import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import { ProductsExample } from "./ProductsExample";

import { useToken } from "./custom_hooks/useToken";

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
import SolutionsPage from "./component/solution_page/SolutionsPage";
import PrivateRoute from "./routes/PrivateRoute";
import Checkout from "./checkout/Checkout";

const App = () => {
  const [listItems, setListItems] = useState([]);

  const { token, setToken } = useToken();

  //Add item to the list and increment the quantity
  const handleAddItemToList = (product) => {
    const itemExist = listItems.find((item) => item.id === product.id);
    if (itemExist) {
      setListItems(
        listItems.map((item) =>
          item.id === product.id
            ? { ...itemExist, quantity: itemExist.quantity + 1 }
            : item
        )
      );
    } else {
      setListItems([...listItems, { ...product, quantity: 1 }]);
    }
  };

  //Decrement the quantity and remove the item from list
  const handleRemoveItemFromList = (product) => {
    const itemExist = listItems.find((item) => item.id === product.id);
    if (itemExist.quantity === 1) {
      setListItems(listItems.filter((item) => item.id !== product.id));
    } else {
      setListItems(
        listItems.map((item) =>
          item.id === product.id
            ? { ...itemExist, quantity: itemExist.quantity - 1 }
            : item
        )
      );
    }
  };

  //Clear cart
  const clearCart = () => setListItems([]);
  // console.log(token);
  return (
    <div>
      <Header
        AddItemToList={handleAddItemToList}
        RemoveItemFromList={handleRemoveItemFromList}
        listItems={listItems}
      />
      <BreadCrumbs />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/store"
          element={
            <ProductsList
              ProductsExample={ProductsExample}
              listItems={listItems}
              addItemToList={handleAddItemToList}
              removeItemFromList={handleRemoveItemFromList}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route
          path="/store/cart"
          element={<CartList listItems={listItems} />}
        />
        <Route path="/checkout" exact element={<PrivateRoute />}>
          <Route path="/checkout" exact element={<Checkout />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
