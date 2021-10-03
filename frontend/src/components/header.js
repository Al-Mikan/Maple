import "../styles/header.css";
import MapleLogo from "../assets/MAPLE.png";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
const Header = () => {
  const [headerOpen, setHeaderOpen] = useState(false);
  return (
    <>
      <img
        className="Headerlogo"
        src={MapleLogo}
        alt="Logo"
        onClick={() => setHeaderOpen(!headerOpen)}
      />
      <div className={headerOpen ? "headerOpen about" : "about"} />
      <div
        className={
          headerOpen ? "about_content_show about_content" : "about_content"
        }
      >
        <div>
          <p className="MAPLE_title">MAPLE</p>
          <p className="MAPLE-sub">Map　×　Photo</p>
          <p></p>
        </div>
        <Button onClick={() => setHeaderOpen(!headerOpen)} borderRadius={20}>
          close
        </Button>
        <div className="footer">
          <p>ガリガリ君</p>
          <FaGithub />
        </div>
      </div>
    </>
  );
};

export default Header;
