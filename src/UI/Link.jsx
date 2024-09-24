import styled from "styled-components";

const StyledLink = styled.a`
  cursor: pointer;
  display: block;
  height: 5vh;
  width: 3vw;
  padding: 1vh;
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px);
  transition: var(--transition-1);
  border: 0.001px solid var(--blue-0-5);
  z-index: 100;
  &:hover {
    background-color: var(--blue-0-5);
  }
`;

function Link({children, href}) {
  return <StyledLink href={href}>{children}</StyledLink>;
}

export default Link;
