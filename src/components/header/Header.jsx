import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container  header__container">
        <h5>Hello I'm</h5>
        <h1>Gerónimo Velasco</h1>
        <h5 className="text-light">Junior Full Stack Web Developer</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>

        <div className="me">
          <img src={ME} alt="me" /> 
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
