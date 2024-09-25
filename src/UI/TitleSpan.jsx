import styled from "styled-components";

const Span = styled.span`
  font-size: 3rem;
  font-weight: 500;
  color: var(--orange);
  filter: brightness(1.2);
  text-transform: uppercase;
`;

function TitleSpan({children}) {
  return <Span>{children}</Span>;
}

export default TitleSpan;
