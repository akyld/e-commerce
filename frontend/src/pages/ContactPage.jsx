import React from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Policy from "../components/Layout/Policy/Policy";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Header />;
      <Contact />;
      <Policy />;
      <Footer />;
    </React.Fragment>
  );
};

export default ContactPage;
