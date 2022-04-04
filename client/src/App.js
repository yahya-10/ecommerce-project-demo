import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { ProductsExample } from "./ProductsExample";
import { useToken } from "./custom_hooks/useToken";
import { useThemeHandler } from "./custom_hooks/useThemeHandler";
// import { LoggedIn } from "./utils";

const Header = React.lazy(() => import("./component/header/Header"));
const LandingPage = React.lazy(() => import("./component/LandingPage"));
const Login = React.lazy(() => import("./component/authentication/Login"));
const Register = React.lazy(() =>
  import("./component/authentication/Register")
);
const Footer = React.lazy(() => import("./component/footer/Footer"));
const Contact = React.lazy(() => import("./component/Contact"));
const ProductsList = React.lazy(() =>
  import("./component/products/ProductsList")
);
const AboutPage = React.lazy(() => import("./component/about_page/AboutPage"));
const CartList = React.lazy(() => import("./component/header/CartList"));
const SolutionsPage = React.lazy(() =>
  import("./component/solution_page/SolutionsPage")
);
const Checkout = React.lazy(() => import("./checkout/Checkout"));
const PrivateRoute = React.lazy(() => import("./helpers/PrivateRoute"));
const UserProfile = React.lazy(() =>
  import("./component/user_profile/UserProfile")
);
const UserValidationPage = React.lazy(() =>
  import("./component/user_profile/UserValidationPage")
);
const SuccessfullPayment = React.lazy(() =>
  import("./checkout/SuccessfullPayment")
);

/**
 *
 * @returns Component
 * This component defines all the different routes of the platform. Authorized and unauthorized routes
 */

const App = () => {
  const [listItems, setListItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState();
  const [storedTheme, setTheme] = useThemeHandler("theme");
  const [isAuth, setIsAuth] = useState(false);

  const { setToken } = useToken();

  const handleAddNewUser = (newUser) => {
    setUsers([...users, { ...newUser, id: Date.now() }]);
  };

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

  //Pass the selected package to the user profile
  const handleSelectedPackage = (subscription) => {
    setSelectedPackage(subscription);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsAuth(true);
    }
  }, []);

  //Clear cart
  const clearCart = () => setListItems([]);

  // console.log(
  //   "app.js",
  //   Object.values(sessionStorage.getItem("token") || null).length
  // );

  return (
    <div>
      <Header
        AddItemToList={handleAddItemToList}
        RemoveItemFromList={handleRemoveItemFromList}
        listItems={listItems}
        storedTheme={storedTheme}
        setTheme={setTheme}
        isAuth={isAuth}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingPage
              handleSelectPackage={handleSelectedPackage}
              storedTheme={storedTheme}
            />
          }
        />
        <Route
          path="/login"
          element={<Login setToken={setToken} storedTheme={storedTheme} />}
        />
        <Route
          path="/register"
          element={
            <Register
              handleAddNewUser={handleAddNewUser}
              setToken={setToken}
              storedTheme={storedTheme}
            />
          }
        />
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
          <Route
            path="/checkout"
            exact
            element={<Checkout storedTheme={storedTheme} />}
          />
        </Route>
        <Route path="/profile" exact element={<PrivateRoute />}>
          <Route
            path="/profile"
            exact
            element={
              <UserProfile
                selectedPackage={selectedPackage}
                storedTheme={storedTheme}
                setIsAuth={setIsAuth}
              />
            }
          />
        </Route>
        <Route path="/validation-stage" exact element={<PrivateRoute />}>
          <Route
            path="/validation-stage"
            exact
            element={<UserValidationPage storedTheme={storedTheme} />}
          />
        </Route>
        <Route
          path="/checkout/successfull_payment"
          exact
          element={<PrivateRoute />}
        >
          <Route
            path="/checkout/successfull_payment"
            exact
            element={<SuccessfullPayment storedTheme={storedTheme} />}
          />
        </Route>
      </Routes>
      <Footer storedTheme={storedTheme} />
    </div>
  );
};

export default App;
