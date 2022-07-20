import React, { Fragment, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Store";
import Checkout from "./Checkout";
import LoginPage from "./LoginPage";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Account from "./Account";
import Footer from "./Footer";
import CreateUser from "./CreateUser";
const promise = loadStripe(
  "pk_test_51LJJQcSDuzCeoKrDELuOOLNyMVElMTei91Nr71Ahxpa2WwwxdPTIJKqxinWJJlsa4CNZHUpu50li7MDirBWdhDwm00g1OeWp1l"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        // means user is already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/store"
            element={
              <Fragment>
                <Header />
                <Store />
                <Footer />
              </Fragment>
            }
          />
          <Route
            path="/account"
            element={
              <Fragment>
                <Header />
                <Account />
              </Fragment>
            }
          />
          <Route
            path="/orders"
            element={
              <Fragment>
                <Header />
                <Orders />
              </Fragment>
            }
          />
          <Route
            path="/checkout"
            element={
              <Fragment>
                <Header />
                <Checkout />
              </Fragment>
            }
          />
          <Route
            path="/payment"
            element={
              <Fragment>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </Fragment>
            }
          />
          <Route
            path="/createUser"
            element={
              <Fragment>
                <CreateUser />
              </Fragment>
            }
          />
          <Route
            path="/login"
            element={
              <Fragment>
                <LoginPage />
              </Fragment>
            }
          />
          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <Home />
                <Footer />
              </Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
