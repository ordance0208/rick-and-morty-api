import './RadioButton.css';

const RadioButton = ({value, active, setActive}) => {
  const calculateStyles = active === value ? 'radio-button active' : 'radio-button';

  return (
    <button className={calculateStyles}
      onClick={() => {
        setActive(value);
      }}>{value}
    </button>
  );
};

export default RadioButton;