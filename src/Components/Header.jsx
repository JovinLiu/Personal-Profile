//Library
import styled, {keyframes} from "styled-components";
import {useRef} from "react";
//Components
import NavButton from "../UI/NavButton";
import Slash from "../UI/Slash";
import Row from "../UI/Row";
//Style
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
  top: 1.2rem;
  z-index: 800;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  animation-name: ${dropdown};
  animation-duration: 4s;
  animation-iteration-count: 1;
`;

const Navlist = styled.div`
  margin: 1.2rem auto;
  display: flex;
  height: 5rem;
  max-width: 70vw;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem 0 5rem;
  box-shadow: 0 px 5px rgba(0, 0, 0, 0.03);
  border: 0.001px solid var(--blue-0-5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: var(--blue-0-75);
  background-color: var(--light-0-03);
  &:hover {
    color: var(--light-0-85);
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
    const id = e.target.textContent.split(" ").join("").toLowerCase();
    const section = document.getElementById(id);

    section.scrollIntoView({behavior: "smooth"});
  }

  return (
    <Nav id="navbar">
      <Navlist id="nav-list" onClick={handleClick}>
        <NavButton icon="home-outline">Home</NavButton>
        <Row id="nav-button-container" gap="4rem" align="center">
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
