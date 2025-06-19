import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const formatted =
      path === "/" ? "Home" : path.replace("/", "").replace(/-/g, " ");
      document.title = `IPOConnect - ${ formatted.charAt(0).toUpperCase() + formatted.slice(1) }`;
  }, [location]);

  return null;
};

export default RouteTitleUpdater;
