import { Fragment } from "react";
import React from "react";
import Cart from "../components/Cart/Cart";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Policy from "../components/Layout/Policy/Policy";

const CartPage = () => {
  return (
    <Fragment>
      <Header />
      <Cart />
      <Policy />
      <Footer />
    </Fragment>
  );
};

export default CartPage;
