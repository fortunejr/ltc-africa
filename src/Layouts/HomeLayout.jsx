import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";

const HomeLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

export default HomeLayout;
