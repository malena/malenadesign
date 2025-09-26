import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
<<<<<<< HEAD
      behavior: "smooth",
    });
  }, [location.pathname]);
=======
      behavior: "smooth", // Optional: for a smooth scrolling animation
    });
  }, [location.pathname]); // Re-run effect when the pathname changes
>>>>>>> 060c0dc5 (Small css updates, update base url, add scrolltop)

  return children;
};

export default ScrollToTop;
