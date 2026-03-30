import React from "react";
import EwasteNav from "../Ewaste/Components/EwasteNav/EwasteNav";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const EwasteLayout = () => (
  <>
    <EwasteNav />
    <Outlet />
    <Footer />
  </>
);

export default EwasteLayout;
