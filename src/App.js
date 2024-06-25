import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Homepage } from './components/Homepage/Homepage';
import { Offers } from './components/Offers/Offers';
import { About } from './components/About/About';
import { Campus } from './components/Campus/Campus';
import { Testimonials } from './components/Testimonials/Testimonials';
import { ContactUs } from './components/ContactUs/ContactUs';
import { TitleOfComponent } from './components/TitleOfComponent/TitleOfComponent';

export default function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <TitleOfComponent name='Offers' desc='What We Offer' />
      <Offers />
      <TitleOfComponent name='About' desc='What We Do' />
      <About />
      <TitleOfComponent name='Gallery' desc='Campus Photo' />
      <Campus />
      <TitleOfComponent name='Testimonials' desc='What Student Says' />
      <Testimonials />
      <TitleOfComponent name='Contact Us' desc='Get In Touch' />
      <ContactUs />
    </div>
  );
}
