import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

function Navbar({ isOpen, toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Samuraj Džekovi
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="aboutUs"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                O nama
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="problem"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Problem
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="resenje"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Rešenje
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="isprobaj"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Isprobaj
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sign Up
              </NavLinks>
            </NavItem> */}
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
