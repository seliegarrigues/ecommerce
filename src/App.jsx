import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Aos from "aos";
import"aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/banner/Banner'

const App = () => {

  React.useEffect(()=>{
    Aos.init({
      offset:100,
      duration: 800,
      easing: "ease-in-sine",
      delay:100,
    })
    Aos.refresh();
  }, []);
  return (
    <div>
      
     <Navbar />
     <Hero />
     <Products/>
     <TopProducts/>
     <Banner  />
     
      </div>
  );
};

export default App