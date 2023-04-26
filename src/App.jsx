import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/common/Header';
import Banner from './components/common/Banner';
import Footer from './components/common/Footer'; 
import Construction from './pages/Loans/Construction';
import SelfEmployed from './pages/Loans/SelfEmployed';
import Bridge from './pages/Loans/Bridge';
import BankStatement from './pages/Loans/BankStatement';
import Conventional from './pages/Loans/Conventional';
import ComboHome from './pages/Loans/ComboHome';
import ProfitLoss from './pages/Loans/ProfitLoss';
import Private from './pages/Loans/Private';
import Dscr from './pages/Loans/Dscr';
import JumboHome from './pages/Loans/JumboHome';
import Mortgage from './pages/Loans/Mortgage';
import { useEffect } from 'react';
import userway from './userway';

function App() {
  useEffect(()=> {
    userway?.start()
    setTimeout(() => {
      const iconElement = document.querySelector('#userwayAccessibilityIcon');
      if (iconElement) {
        iconElement.setAttribute('style', 'background-color: rgb(34, 45, 57) !important;');
      }
    }, 2000);
  }, [])
  return (
    <BrowserRouter>
      <Banner />
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construction-loan" element={<Construction />} />
        <Route path="/self-employed-loan" element={<SelfEmployed />} />
        <Route path="/bridge-loan" element={<Bridge />} />
        <Route path="/bank-statement-loan" element={<BankStatement />} />
        <Route path="/conventional-loan" element={<Conventional />} />
        <Route path="/combo-home-loan" element={<ComboHome />} />
        <Route path="/profit-loss-loan" element={<ProfitLoss />} />
        <Route path="/private-loan" element={<Private />} />
        <Route path="/dscr-loan" element={<Dscr />} />
        <Route path="/jumbo-home-loan" element={<JumboHome />} />
        <Route path="/flex-mortgage-loan" element={<Mortgage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
