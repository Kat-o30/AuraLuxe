import './App.css';
import Home from "./Pages/Home/index";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KyleCosmeticsPage from './Pages/KyleCosmetics';
import RhodePage from './Pages/Rhode';
import RareBeautyPage from './Pages/RareBeauty';
import BrazilianCrushPage from './Pages/BrazillianCrush';
import Navbar from './Components/navbar';
import BrandsOfferProductPages from "./Pages/BrandsOfferProductPages"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyle-cosmetics" element={<KyleCosmeticsPage />} />
        <Route path="/rhode" element={<RhodePage />} />
        <Route path="/rare-beauty" element={<RareBeautyPage />} />
        <Route path="/brazilian-crush" element={<BrazilianCrushPage />} />
        <Route path="/*" element={<BrandsOfferProductPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
