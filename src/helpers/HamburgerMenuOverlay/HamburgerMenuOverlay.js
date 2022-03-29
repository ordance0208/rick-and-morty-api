import { useEffect, useState } from 'react';
import './HamburgerMenuOverlay.css';

const HamburgerMenuOverlay = ({onClick}) => {

  const [browserSize, setBrowserSize] = useState({width : window.innerWidth, height: window.innerHeight})

  const updateBrowserSize = () => {
    const browserSize = { width: window.innerWidth, height: window.innerHeight };

    setBrowserSize(browserSize);
  };

  useEffect(() => {
    window.addEventListener('resize', updateBrowserSize);

    return () => window.removeEventListener('resize', updateBrowserSize);
  }, []);

  return (
    <div className='hamburger-menu-overlay' style={{'width' : browserSize.width, 'height' : browserSize.height}} onClick={onClick}>
    </div>
  );
};

export default HamburgerMenuOverlay;