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
          <p className="MAPLE_sub">地図が主役の写真集 MAPLE</p>
          <p className="MAPLE_sub2">
            たくさん投稿してその土地のいいところを伝えよう
          </p>
        </div>
        <Button
          onClick={() => setHeaderOpen(!headerOpen)}
          borderRadius={20}
          marginBottom={10}
        >
          close
        </Button>
        <div className="footer">
          <p className="teamName">ガリガリ君</p>
          <a
            href="https://github.com/Nano3013/garigarikun"
            target="blank"
            rel="noreferrer"
          >
            <div className="icon1">
              <FaGithub size={20} color="#eee" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
