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
import BlogDetail1 from './pages/Blogs/BlogDetail1';
import BlogDetail2 from './pages/Blogs/BlogDetail2';
import BlogDetail3 from './pages/Blogs/BlogDetail3';
import BlogDetail4 from './pages/Blogs/BlogDetail4';
import BlogDetail5 from './pages/Blogs/BlogDetail5';
import BlogDetail6 from './pages/Blogs/BlogDetail6';

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
        <Route path='/blog/a-guide-to-first-time-home-buyer-programs-loans-&-grants' element={<BlogDetail1 />} />
        <Route path='/blog/how-much-house-can-i-afford' element={<BlogDetail2 />} />
        <Route path='/blog/how-to-buy-a-house-with-student-loan-debt' element={<BlogDetail3 />} />
        <Route path='/blog/buying-an-investment-property-a-complete-guide' element={<BlogDetail4 />} />
        <Route path='/blog/how-to-finance-an-airbnb-rental-a-guide-for-investors' element={<BlogDetail5 />} />
        <Route path='/blog/closing-costs-what-are-they-and-how-much' element={<BlogDetail6 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
