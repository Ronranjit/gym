import React from 'react';

import Slider from './components/Slider';
import Navbar from './components/Navbar';
import PricingPlan from './components/PricingPlan';
import Investors from './components/Investors';
import Contact from './pages/Contact';
import Map from './components/Map';
import About from './pages/About';
import Footer from './components/Footer';
import Testimonal from './components/Testimonal';
import Card from './components/Card';

function App() {
  return (
    <div className=''>
      {/* <Navbar /> */}
      <Slider />
      <About />
      {/* <Program /> */}
      <Card />
      <PricingPlan />
      <Testimonal />
      <Investors />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
