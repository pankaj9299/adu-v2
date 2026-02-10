import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Run after the new route content has rendered
    requestAnimationFrame(() => {
      // Works for normal page scrolling
      window.scrollTo(0, 0);

      // Extra safety for some browsers/layouts
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [location.key]); // <-- runs on every navigation, even if same pathname

  return null;
}
