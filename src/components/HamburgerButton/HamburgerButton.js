import './HamburgerButton.css';

const HamburgerButton = ({onClick}) => {
  return (
    <div onClick={onClick} className='hamburger-button'>
      <div></div>
    </div>
  )
};

export default HamburgerButton;