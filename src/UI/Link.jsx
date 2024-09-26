import styled from "styled-components";

const StyledLink = styled.a`
  cursor: pointer;
  display: block;
  height: 5vh;
  width: 5vh;
  padding: 1vh;
  display: flex;
  align-items: center;
  backdrop-filter: ${({backdrop}) => backdrop};
  transition: var(--transition-1);
  border: ${({border}) => border};
  z-index: 100;
  &:hover {
    background-color: var(--blue-0-5);
  }
`;

function Link({children, href, border, backdrop}) {
  return (
    <StyledLink href={href} border={border} backdrop={backdrop}>
      {children}
    </StyledLink>
  );
}

export default Link;
