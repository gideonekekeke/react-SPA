import React from "react";
import styled from "styled-components";
import { animateScroll, scroll, Link } from "react-scroll";

const HeaderView = () => {
  return (
    <Container>
      <Logo
      // onClick={() => {
      //   scroll.scrollToTop();
      // }}
      >
        Logo
      </Logo>
      <Link to="home" duration={1000} activeClass="active" smooth={true}>
        <HomeText>Home</HomeText>
      </Link>

      <Link duration={1000} activeClass="active" smooth={true} to="about">
        <AboutText>About</AboutText>
      </Link>

      <Link duration={1000} activeClass="active" smooth={true} to="contact">
        {" "}
        <ContactText>Contact</ContactText>
      </Link>
    </Container>
  );
};

export default HeaderView;
const HomeText = styled.div`
  cursor: pointer;
`;
const AboutText = styled.div`
  cursor: pointer;
`;
const ContactText = styled.div`
  cursor: pointer;
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #2d2e32;
  justify-content: space-around;
  align-items: center;
  display: flex;
  color: white;
  position: fixed;
`;

const Logo = styled.div``;
