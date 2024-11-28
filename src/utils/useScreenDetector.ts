import { useEffect, useState } from 'react';

export const useScreenDetector = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1200;
  const isDesktop = width >= 1200;

  return { isMobile, isTablet, isDesktop };
};
