import styled from "styled-components";

const Span = styled.span`
  font-size: 3rem;
  font-weight: 500;
  color: var(--indigo);
  filter: brightness(1.2);
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-shadow:
    -0.65px -0.65px 0 var(--light-0-2),
    0.65px -0.65px 0 var(--light-0-2),
    -0.65px 0.65px 0 var(--light-0-2),
    0.65px 0.65px 0 var(--light-0-2);
  z-index: 299;
`;

function TitleSpan({id, children}) {
  return <Span id={id}>{children}</Span>;
}

export default TitleSpan;
