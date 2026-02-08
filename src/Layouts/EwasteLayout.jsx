import React from 'react'
import EwasteNav from '../Ewaste/Components/EwasteNav/EwasteNav';
import { Outlet } from 'react-router-dom';

const EwasteLayout = () => (
  <>
    <EwasteNav />
    <Outlet />
  </>
);

export default EwasteLayout
