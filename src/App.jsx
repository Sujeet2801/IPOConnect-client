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
import SectorDetailedPage from "./page/sector/SectorDetailedPage";
import HeaderLogin from "./components/header/HeaderLogin";

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <HeaderMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/v1/api/users/" element={<Home />} />
          <Route path="/v1/api/users/login" element={<HeaderLogin />} />
          <Route path="/v1/api/users/register" element={<HeaderLogin />} />
          <Route path="/v1/api/users/home" element={<Home />} />
          <Route path="/v1/api/users/blog" element={<BlogHome />} />
          <Route path="/v1/api/users/shark-investor" element={<All_Shark_Investor />} />
          <Route path="/v1/api/users/brokers" element={<All_Brokers />} />
          <Route path="/v1/api/users/upcoming" element={<Upcoming_IPOs_Page />} />
          <Route path="/v1/api/users/Ongoing" element={<Ongoing_IPOs_Page />} />
          <Route path="/v1/api/users/sector" element={<Sector />} />
          <Route path="/v1/api/users/sector/:sectorName" element={<SectorDetailedPage />} />
          <Route path="/v1/api/users/careers" element={<CarrerMain />} />
          <Route path="/v1/api/users/contact" element={<ContactMain />} />
        </Routes>
        <FooterMain />
      </div>
    </Router>
  );
}

export default App;
