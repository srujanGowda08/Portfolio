import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/webdev.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello, I'm</h3>
        <h1>Srujan G S</h1>
        <h5 className="text-light">
          Software Developer | Founder & CEO of{" "}
          <a className="text-animation" href="https://technify-z.vercel.app/">
            TechnifyZ
          </a>
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contacts" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
