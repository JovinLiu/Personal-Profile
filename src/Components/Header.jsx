import styled, {keyframes} from "styled-components";
import NavButton from "../UI/NavButton";
import Slash from "../UI/Slash";
import Row from "../UI/Row";
import {useRef} from "react";

const dropdown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-150%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Nav = styled.nav`
  font-size: 1.75rem;
  position: fixed;
  bottom: auto;
  left: 0;
  right: 0;
  top: 1.2vh;
  z-index: 200;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  animation-name: ${dropdown};
  animation-duration: 4s;
  animation-iteration-count: 1;
`;

const Navlist = styled.div`
  margin: 1.2vh auto;
  display: flex;
  height: 5vh;
  max-width: 70vw;
  align-items: center;
  justify-content: space-between;
  padding: 0 3vw 0 3vw;
  color: var(--light-0-85);
  box-shadow: 0 px 5px rgba(0, 0, 0, 0.03);
  border: 0.001px solid var(--blue-0-5);
  backdrop-filter: blur(5px);
  background-color: var(--light-0-03);
  &:hover {
    background-color: var(--blue-0-5);
  }
`;

function Header() {
  const aboutmeBtn = useRef(null);
  const projectsBtn = useRef(null);
  const skillsBtn = useRef(null);
  const contactBtn = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    const aboutme = document.querySelector("#aboutme");
    const projects = document.querySelector("#projects");
    const skills = document.querySelector("#skills");
    const contact = document.querySelector("#contact");
    aboutme.scrollIntoView({behavior: "smooth"});
  }

  return (
    <Nav id="navbar">
      <Navlist onClick={handleClick}>
        <NavButton icon="home-outline">Home</NavButton>
        <Row gap="4rem">
          <NavButton icon="person-outline" href="#aboutme" ref={aboutmeBtn}>
            About Me
          </NavButton>
          <Slash>/</Slash>
          <NavButton icon="code-working-outline" href="#projects" ref={projectsBtn}>
            Projects
          </NavButton>
          <Slash>/</Slash>
          <NavButton icon="hammer-outline" href="#skills" ref={skillsBtn}>
            Skills
          </NavButton>
          <Slash>/</Slash>
          <NavButton icon="call-outline" href="#contact" ref={contactBtn}>
            Contact
          </NavButton>
        </Row>
      </Navlist>
    </Nav>
  );
}

export default Header;
