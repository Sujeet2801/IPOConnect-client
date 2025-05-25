import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeaderMain from "./components/header/HeaderMain";
import Home from "./components/home/Home";
import BlogHome from "./page/blog/BlogHome";
import Sector from "./page/sector/Sector";

import ContactMain from "./components/contact/ContactMain";
import FooterMain from "./components/footer/FooterMain";

import Upcoming_IPOs_Page from "./page/ipo/Upcoming_IPOs_Page";
import Ongoing_IPOs_Page from "./page/ipo/Ongoing_IPOs_Page";
import Newlisted_IPO_Page from "./page/ipo/Newlisted_IPO_Page.jsx";

import SectorDetailedPage from "./page/sector/SectorDetailedPage";
import Shark_Detailed_Page from "./page/sharkInvestor/Shark_Detailed_Page";
import All_Shark_Investor from "./page/sharkInvestor/All_Shark_Investor";

import All_Brokers from "./page/broker/All_Brokers";

import TermsOfService from "./components/legal/TermsOfService";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import Security from "./components/legal/Security";
import Disclaimer from "./components/legal/Disclaimers";
import Compliance from "./components/legal/Compliance";
import ScrollToTop from "./utility/scrollToTop.js";

import { AuthProvider } from "./hooks/useAuth.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        
        <ToastContainer />
        <AuthProvider>
          <ScrollToTop />
          <HeaderMain />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/blog" element={<BlogHome />} />

          <Route path="/upcoming" element={<Upcoming_IPOs_Page />} />
          <Route path="/Ongoing" element={<Ongoing_IPOs_Page />} />
          <Route path="/Listed" element={<Newlisted_IPO_Page />} />

          <Route path="/sector" element={<Sector />} />
          <Route path="/sector/:sectorName" element={<SectorDetailedPage />} />

          <Route path="/shark-investor" element={<All_Shark_Investor />} />
          <Route path="/shark-investor/:sharkName" element={<Shark_Detailed_Page />} />

          <Route path="/brokers" element={<All_Brokers />} />

          <Route path="/contact" element={<ContactMain />} />

          <Route path="/termsOfservice" element={<TermsOfService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/security" element={<Security />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/compliance" element={<Compliance />} />

          <Route path="/login" element={<Layout />} />
          <Route path="/register" element={<Layout />} />
          
          </Routes>
        </AuthProvider>
        <FooterMain />
      </div>
    </Router>
  );
}

export default App;
