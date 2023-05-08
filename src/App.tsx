import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';

import './App.css';
import Navbar from './components/Navbar';

const App = () => (
  <div className="bg-mainBg">
    <Navbar />
    <RouterProvider router={router} />
  </div>
);

export default App;
