import { WEFF } from "@src/assets/images";
import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "@components";

const NavbarWrapper = styled.div`
  position: sticky;
  height: 110px;
  @media (max-width: 1348px) {
    padding-bottom: 20px;
  }
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;

  z-index: 100;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
`;

const Logo = styled.img`
  height: 50px;
  @media (min-width: 1348px) {
    width: 113px;
    height: 30px;
    margin-bottom: 10px;
  }
  object-fit: cover;
  object-position: center;
`;

const Nav = styled.nav<{ open: boolean }>`
  opacity: ${(props) => (props.open ? "1" : "0")};
  max-height: ${(props) => (props.open ? "fit-content" : "0")};

  overflow: hidden;

  padding: ${(props) => (props.open ? "120px 80px 100px" : "0 80px")};

  position: absolute;
  left: 0;
  right: 0;
  transform: translateY(103%);
  background: #f4f4f4 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 30px #00000029;
  border-radius: 20px;
  transition: all 0.3s;

  @media (min-width: 1348px) {
    display: block;
    overflow: auto;
    opacity: 1;
    max-height: fit-content;
    position: static;
    transform: none;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    display: flex;
    overflow: hidden;
    @media (max-width: 1348px) {
      @media screen and (orientation: landscape) {
        flex-direction: row;
        justify-content: space-around;
      }
      flex-direction: column;
    }

    margin: 0;
    padding: 0;
  }

  li {
    text-align: right;
    overflow: hidden;
    margin-bottom: 50px;
    @media (min-width: 1348px) {
      margin-right: 80px;
      margin-bottom: 0;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  a {
    color: #333;
    text-decoration: none;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    @media (min-width: 1348px) {
      font-size: 20px;
      line-height: 28px;
    }
  }
`;

const MenuBar = styled.div<{ active: boolean }>`
  cursor: pointer;
  padding: 5px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? "black" : `white`)};

  @media (min-width: 1348px) {
    display: none;
  }
  span {
    width: 7px;
    height: 7px;
    border-radius: 50px;
    overflow: hidden;
    background-color: ${(props) => (props.active ? "white" : `black`)};
  }
`;
const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleMenu = () => {
    return setToggle(!toggle);
  };
  const closeToggle = () => {
    setToggle(false);
  };

  return (
    <NavbarWrapper>
      <Container full>
        <NavbarContent>
          {/* when logo click move on the top page */}
          <Logo
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            src={WEFF}
          />
          {/* if the device min-width under 390px the under block wont shown */}
          <MenuBar active={toggle} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </MenuBar>

          <Nav open={toggle}>
            <ul>
              <li>
                <a href="#keycase" onClick={closeToggle}>
                  주요사례
                </a>
              </li>
              <li>
                <a href="#partner" onClick={closeToggle}>
                  파트너
                </a>
              </li>
              <li>
                <a href="#director" onClick={closeToggle}>
                  디렉터소개
                </a>
              </li>
              <li>
                <a href="#welkey" onClick={closeToggle}>
                  웰키소개
                </a>
              </li>
            </ul>
          </Nav>
        </NavbarContent>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
