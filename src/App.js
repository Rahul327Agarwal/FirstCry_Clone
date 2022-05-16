import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header1 from './Component/Header1';
import Header2 from './Component/Header2';
import Slider from './Component/Slider';
import Section1 from './Component/Section1';
import Footer from './Component/Footer';
import BoysFashion from './Component/BoysFashion';
import GirlsFashion from './Component/GirlsFashion';
import Show_cart from './Component/Show_cart';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header1 />
        <Header2 />
        <Routes>
          <Route path="/" element={<><Slider /><Section1 /></>} />
          <Route path="/boys" element={<BoysFashion/>} /> 
          <Route path="/girls" element={<GirlsFashion />} /> 
          <Route path="/cart" element={<Show_cart />} />  
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

