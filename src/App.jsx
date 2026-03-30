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
import HomeLayout from "./Layouts/HomeLayout";
import EwasteLayout from "./Layouts/EwasteLayout";
import Company from "./Pages/Company/Company";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";
import TermsandConditions from "./Pages/TermsandCondition/TermsandConditions";
import CookiePolicy from "./Pages/CookiePolicy/CookiePolicy";
import DataPolicy from "./Pages/DataPolicy/DataPolicy";
import Media from "./Ewaste/Pages/Media/Media";
import Agriculture from "./Agriculture/Agriculture";
import RealEstate from "./RealEstate/RealEstate";
import RenewableEnergy from "./RenewableEnergy/RenewableEnergy";
import CircularEconomy from "./Pages/CircularEconomy/CircularEconomy";
import GovernancePolicy from "./Components/GovernancePolicy/GovernancePolicy";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const isEwasteRoute = location.pathname.startsWith("/e-waste");

  return (
    <>
      {loading && <Loader onFinished={() => setLoading(false)} />}

      <ScrollToTop />

      {/* home layout  */}
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/thecompany" element={<Company />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/renewable-energy" element={<RenewableEnergy />} />
          <Route path="/termsandconditions" element={<TermsandConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<DataPolicy />} />
          <Route path="/circular-economy" element={<CircularEconomy />} />
          <Route path="/governance-policy" element={<GovernancePolicy />} />
          <Route
            path="/global-footprint"
            element={<GlobalFootprint />}
          />
          <Route path="/contact" element={<ContactEwaste />} />
          <Route path="/media" element={<Media />} />
        </Route>

        {/* ewaste layout  */}
        <Route element={<EwasteLayout />}>
          <Route path="/e-waste" element={<HomepageEwaste />} />
          <Route path="/e-waste/about" element={<AboutEwaste />} />
          <Route path="/e-waste/services" element={<ServicesEwaste />} />
          <Route path="/e-waste/sdg-initiatives" element={<SDGEwaste />} />
          <Route path="/e-waste/climate-change" element={<ClimateChange />} />
        </Route>
      </Routes>

      {/* {isEwasteRoute && <Footer />} */}
    </>
  );
}

export default App;
