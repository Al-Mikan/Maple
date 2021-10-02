import "../styles/header.css";
import MapleLogo from "../assets/MAPLE.png"
import MapleLogo2 from "../assets/MAPLE2.png"

const Header = () => {
  
  return (
    <div >
      <img
        className="Headerlogo"
        src={MapleLogo2}
        alt="Logo"
      />
 
    </div>
  );
};

export default Header;
