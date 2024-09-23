import styled from "styled-components";

const StyledLink = styled.a`
  cursor: pointer;
  display: block;
  height: 5rem;
  width: 5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px);
  transition: var(--transition-1);
  border: 0.001px solid var(--orange-0-5);
  z-index: 100;
  &:hover {
    color: var(--dark);
    background-color: var(--orange-0-5);
  }
`;

function Link({children, href}) {
  return <StyledLink href={href}>{children}</StyledLink>;
}

export default Link;
