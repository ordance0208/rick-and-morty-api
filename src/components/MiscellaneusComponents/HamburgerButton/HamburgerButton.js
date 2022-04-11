import './HamburgerButton.css';

const HamburgerButton = ({menuOpened, onClick}) => {
  return (
    <div onClick={onClick} data-active={menuOpened} className='hamburger-button'>
      <div></div>
    </div>
  )
};

export default HamburgerButton;