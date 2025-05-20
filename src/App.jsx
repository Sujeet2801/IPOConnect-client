import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeaderMain from "./components/header/HeaderMain";
import FooterMain from "./components/footer/FooterMain";

import Home from "./components/home/Home";

import Upcoming_IPOs_Page from "./page/ipo/Upcoming_IPOs_Page";
import Ongoing_IPOs_Page from "./page/ipo/Ongoing_IPOs_Page";
import Newlisted_IPO_Page from "./page/ipo/Newlisted_IPO_Page.jsx";

import BlogHome from "./page/blog/BlogHome";

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

          <Route path="/upcoming" element={<Upcoming_IPOs_Page />} />
          <Route path="/Ongoing" element={<Ongoing_IPOs_Page />} />
          <Route path="/Listed" element={<Newlisted_IPO_Page />} />

          <Route path="/blog" element={<BlogHome />} />

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
