import React from "react";
import AppNavBar from "./components/AppNavBar";
import LandingImage from "./components/LandingImage";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Work from "./components/Work";
import Client from "./components/Clients";
import Accolades from "./components/Accolades";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <AppNavBar />
      <LandingImage />
      <AboutUs />
      <OurServices />
      <Work />
      <Client />
      <Accolades />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
