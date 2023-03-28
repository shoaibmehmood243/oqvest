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
        <Route path="/bank-statement-loan" element={<BankStatement />} />
        <Route path="/conventional-loan" element={<Conventional />} />
        <Route path="/combo-home-loan" element={<ComboHome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
