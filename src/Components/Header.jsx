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
  font-size: 1.6rem;
  position: fixed;
  bottom: auto;
  left: 0;
  right: 0;
  top: 2rem;
  z-index: 200;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  animation-name: ${dropdown};
  animation-duration: 4s;
  animation-iteration-count: 1;
`;

const Navlist = styled.div`
  margin: 1.25rem auto;
  display: flex;
  max-width: 70vw;
  align-items: center;
  justify-content: space-between;
  /* border-radius: 9999px; */
  padding: 2rem 4rem;
  color: var(--light-0-85);
  box-shadow: 0 px 5px rgba(0, 0, 0, 0.03);
  border: 0.001px solid var(--orange-0-5);
  backdrop-filter: blur(5px);
  background-color: var(--light-0-03);
  &:hover {
    background-color: var(--orange-0-5);
  }
`;

const Div = styled.div`
  margin-left: auto;
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 4rem;
`;

function Header() {
  return (
    <Nav id="navbar">
      <Navlist>
        <NavButton icon="home-outline">Home</NavButton>
        <Div>
          <NavButton icon="person-outline">About Me</NavButton>
          <Slash>/</Slash>
          <NavButton icon="code-working-outline">Projects</NavButton>
          <Slash>/</Slash>
          <NavButton icon="hammer-outline">Skills</NavButton>
          <Slash>/</Slash>
          <NavButton icon="call-outline">Contact</NavButton>
        </Div>
      </Navlist>
    </Nav>
  );
}

export default Header;
