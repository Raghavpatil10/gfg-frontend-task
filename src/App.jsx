import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import WorkshopFeatures from "./components/WorkshopFeatures";
import AboutPyHack from "./AboutPyHack";
import FAQ from './FAQ';
import Footer from './footer';

function App() {
  return (
    <div className="App font-sans text-gray-800">
      <Header />
      <Hero />
      <WorkshopFeatures />
      <AboutPyHack />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
