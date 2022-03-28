import './HamburgerButton.css';

const HamburgerButton = ({onClick, buttonActive}) => {
  return (
    <div onClick={onClick} data-active={buttonActive} className='hamburger-button'>
      <div></div>
    </div>
  )
};

export default HamburgerButton;