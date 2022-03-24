import React from 'react';
import { Home, Cuisine, Searched, Reicpe } from './';
import { Routes, Route } from 'react-router-dom';

const Pages = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Cuisine />} path='/cuisine/:cat' />
      <Route element={<Searched />} path='/result/:search' />
      <Route element={<Reicpe />} path='/recipe/:id' />
    </Routes>
  );
};

export default Pages;
