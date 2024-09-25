import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  z-index: 99;
  border: 0.001px solid var(--blue-0-5);
  padding: 0.3rem 0.3rem;
  font-size: 1.15vh;
  color: var(--light-0-95);
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(5px);
  white-space: nowrap;
  &:hover {
    color: var(--dark);
    background-color: var(--blue-0-5);
    z-index: 200;
  }
`;

function TechTag({children}) {
  return (
    <StyledButton>
      <span>{children}</span>
    </StyledButton>
  );
}

export default TechTag;
