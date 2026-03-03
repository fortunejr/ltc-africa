import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

const HomeLayout = () => (
  <>
    <Nav />
    <Outlet />
    <Footer />
  </>
);

export default HomeLayout;
