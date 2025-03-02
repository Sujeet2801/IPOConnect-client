import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderMain from "./components/header/HeaderMain";
import Home from "./components/home/Home";
import BlogHome from "./page/blog/BlogHome";
import Sector from "./page/sector/Sector";
import CarrerMain from "./components/carrers/CarrerMain";
import ContactMain from "./components/contact/ContactMain";
import FooterMain from "./components/footer/FooterMain";
import Upcoming_IPOs_Page from "./page/ipo/Upcoming_IPOs_Page";
import Ongoing_IPOs_Page from "./page/ipo/Ongoing_IPOs_Page";
import Mutual_Funds_Main from "./page/mutual_funds/Mutual_Funds_Main";
import All_Brokers from "./page/broker/All_Brokers";
import All_Shark_Investor from "./page/sharkInvestor/All_Shark_Investor";

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <HeaderMain />
        <Routes>
          <Route path="/" element={<Mutual_Funds_Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/sharkinvestor" element={<All_Shark_Investor />} />
          <Route path="/brokers" element={<All_Brokers />} />
          <Route path="/upcoming" element={<Upcoming_IPOs_Page />} />
          <Route path="/Ongoing" element={<Ongoing_IPOs_Page />} />
          <Route path="/sector" element={<Sector />} />
          <Route path="/careers" element={<CarrerMain />} />
          <Route path="/contact" element={<ContactMain />} />
        </Routes>
        <FooterMain />
      </div>
    </Router>
  );
}

export default App;
