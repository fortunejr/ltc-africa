import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Nav from "./Components/Nav/Nav";
import ScrollToTop from "./Components/Nav/ScrollToTop";

import Homepage from "./Pages/Homepage/Homepage";
import Loader from "./Ewaste/Components/Loader/Loader";
import HomepageEwaste from "./Ewaste/Pages/Homepage/Homepage";
import AboutEwaste from "./Ewaste/Pages/About/About";
import ServicesEwaste from "./Ewaste/Pages/Services/Services";
import SDGEwaste from "./Ewaste/Pages/SDG/SDG";
import GlobalFootprint from "./Ewaste/Pages/GlobalFootprint/GlobalFootprint";
import ContactEwaste from "./Ewaste/Pages/Contact/Contact";
import ClimateChange from "./Ewaste/Pages/ClimateChange/ClimateChange";
import Footer from "./Ewaste/Components/Footer/Footer";
import EwasteNav from "./Ewaste/Components/EwasteNav/EwasteNav";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    // Option 1: Hide loader after a fixed time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // show loader for 2 seconds

    return () => clearTimeout(timer);

  }, []);
  const location = useLocation();

  // check if current route is e-waste
  const isEwasteRoute = location.pathname.startsWith("/e-waste");

  return (
    <>
    {loading ? (<Loader />) : (
    <div>
      
      {/* Always show main Nav */}
      <Nav />

      {/* Show EwasteNav ONLY on e-waste routes */}
      {isEwasteRoute && <EwasteNav />}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/e-waste" element={<HomepageEwaste />} />
        <Route path="/e-waste/about" element={<AboutEwaste />} />
        <Route path="/e-waste/services" element={<ServicesEwaste />} />
        <Route path="/e-waste/sdg-initiatives" element={<SDGEwaste />} />
        <Route path="/e-waste/global-footprint" element={<GlobalFootprint />} />
        <Route path="/e-waste/climate-change" element={<ClimateChange />} />
        <Route path="/e-waste/contact" element={<ContactEwaste />} />
      </Routes>

      {/* Show Footer ONLY on e-waste routes */}
      {isEwasteRoute && <Footer />}
    </div>
    )}
    </>
  );
}

export default App;
