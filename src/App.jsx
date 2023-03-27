import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/common/Header';
import Banner from './components/common/Banner';
import Footer from './components/common/Footer'; 
import Construction from './pages/Loans/Construction';
import SelfEmployed from './pages/Loans/SelfEmployed';
import Bridge from './pages/Loans/Bridge';

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construction-loan" element={<Construction />} />
        <Route path="/self-employed-loan" element={<SelfEmployed />} />
        <Route path="/bridge-loan" element={<Bridge />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
