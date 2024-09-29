import styled from "styled-components";

const Span = styled.span`
  font-size: 3rem;
  font-weight: 500;
  color: var(--highlight-2);
  filter: brightness(1.2);
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  z-index: 299;
`;

function TitleSpan({id, children}) {
  return <Span id={id}>{children}</Span>;
}

export default TitleSpan;
