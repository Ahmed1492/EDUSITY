import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Homepage } from './components/Homepage/Homepage';
import { Offers } from './components/Offers/Offers';
import { About } from './components/About/About';
import { Campus } from './components/Campus/Campus';

export default function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Offers />
      <About />
      <Campus />
    </div>
  );
}
