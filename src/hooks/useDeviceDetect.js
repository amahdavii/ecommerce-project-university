import { useEffect, useState } from "react";

export default function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false);

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    if (width <= 640) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      getWindowDimensions();

      function handleResize() {
        getWindowDimensions();
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return { isMobile };
}
