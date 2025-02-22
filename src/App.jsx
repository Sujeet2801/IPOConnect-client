import CarrerMain from "./components/carrers/CarrerMain"
import ContactMain from "./components/contact/ContactMain"
import FooterMain from "./components/footer/FooterMain"
import HeaderMain from "./components/header/HeaderMain"
import Home from "./components/home/Home"
import BlogHome from "./page/BlogHome"


function App() {

  return (
    <div className="bg-gray-100">
      <HeaderMain/>
      {/* <Home/> */}
      {/* <CarrerMain/> */}
      {/* <ContactMain/> */}
      <BlogHome/>
      {/* <FooterMain/> */}

    </div>
  )
}

export default App
