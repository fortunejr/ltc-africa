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
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const isEwasteRoute = location.pathname.startsWith("/e-waste");

  return (
    <>
      {/* Loader overlays the app */}
      {loading && <Loader onFinished={() => setLoading(false)} />}

      {/* App is always mounted */}
      <Nav />

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

      {isEwasteRoute && <Footer />}
    </>
  );
}


export default App;
