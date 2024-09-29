import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  z-index: 99;
  border: 0.001px solid var(--blue-0-5);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  color: var(--light);
  background-color: var(--blue-0-5);
  backdrop-filter: blur(5px);
  white-space: nowrap;
`;

function TechTag({children}) {
  return (
    <StyledButton>
      <span>{children}</span>
    </StyledButton>
  );
}

export default TechTag;
