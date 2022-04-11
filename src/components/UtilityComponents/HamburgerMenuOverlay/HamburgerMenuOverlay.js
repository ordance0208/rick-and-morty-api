import { useEffect, useState } from 'react';
import './HamburgerMenuOverlay.css';

// This overlay component is used to close the hamburger menu when
// the user clicks outside of the menu, it streches across the
// height and the width of the entire screen
const HamburgerMenuOverlay = ({onClick}) => {

  const [browserSize, setBrowserSize] = useState({width : window.innerWidth, height: window.innerHeight})

  // This function updates the width and height of the overlay depending on the size
  // of the screen when the screen is resized
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