import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import HeaderLinks from "./HeaderLinks"; 
import HeaderLogo from "./HeaderLogo"; 
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import Button from "../../utility/Button";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useNavigate()
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

  return (
    <div className="flex justify-between md:justify-between items-center 
    px-10 p-4 bg-white shadow-md">

      {/* Logo */}
      <HeaderLogo/>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <HeaderLinks />
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md 
        rounded-md p-4 z-50 md:hidden">
          <HeaderLinks />
        </div>
      )}

      {user ? (
        <Button className="text-md cursor-pointer" onClick={handleLogout}>
            Logout
        </Button>
        ) : (
        <Button className="text-md cursor-pointer" onClick={() => nav('/login')}>
            Login
        </Button>
      )}

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <CgMenuGridO className="text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
      </div>
  
    </div>
  );
}

export default Header;
