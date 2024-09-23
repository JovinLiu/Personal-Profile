import styled, {keyframes} from "styled-components";
import NavButton from "../UI/NavButton";
import Slash from "../UI/Slash";

const dropdown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Nav = styled.nav`
  position: fixed;
  bottom: auto;
  left: 0;
  right: 0;
  top: 2rem;
  z-index: 999;
  margin: 0 auto;
  max-width: var(--content-width);
  padding-left: 2rem;
  padding-right: 2rem;
  animation-name: ${dropdown};
  animation-duration: 2s;
  animation-iteration-count: 1;
`;

const Navlist = styled.div`
  margin: 1.25rem auto;
  display: flex;
  max-width: 50vw;
  align-items: center;
  justify-content: space-between;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.03);
  padding: 1.5rem 2.5rem;
  color: var(--light-0-85);
  box-shadow: 0 px 5px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(5px);
`;

const Div = styled.div`
  margin-left: auto;
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 2.3rem;
`;

function Header() {
  return (
    <Nav id="navbar">
      <Navlist>
        <NavButton>Jovin Liu</NavButton>
        <Div>
          <NavButton>About Me</NavButton>
          <Slash>/</Slash>
          <NavButton>Projects</NavButton>
          <Slash>/</Slash>
          <NavButton>Skills</NavButton>
          <Slash>/</Slash>
          <NavButton>Contact</NavButton>
        </Div>
      </Navlist>
    </Nav>
  );
}

export default Header;
