import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Recipes from "./pages/Recipes";

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/recipes' element={<Recipes/>}/>
    </Routes>
  );
}

export default Main;