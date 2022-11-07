import React, {useState, useEffect} from "react";
import {SCREEN_SIZES} from "../config/screenSizes"

export const useMobile = ()=>{
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // on initial load check if screen is smaller than 750 if so set mobile to true
    setIsMobile(
      document.readyState === "complete" && window.innerWidth <= SCREEN_SIZES.MOBILE
        ? true
        : false
    );
    const getMobileSize = () => {
      setIsMobile(false);
      if (window.innerWidth <= SCREEN_SIZES.MOBILE) {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", getMobileSize);
    return () => window.removeEventListener("resize", getMobileSize);
  }, []);
  return isMobile;
}