import "../styles/header.css";
import MapleLogo from "../assets/MAPLE.png";

const Header = () => {
  return (
    <div>
      <img className="Headerlogo" src={MapleLogo} alt="Logo" />
    </div>
  );
};

export default Header;
