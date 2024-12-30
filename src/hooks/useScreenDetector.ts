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

  const isSmallest = width < 420;
  const isMobile = width >= 420 && width < 640;
  const isTablet = width >= 640 && width < 1040;
  const isDesktop = width >= 1040;

  return { isSmallest, isMobile, isTablet, isDesktop };
};
