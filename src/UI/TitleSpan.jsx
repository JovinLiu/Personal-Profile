import styled from "styled-components";

const Span = styled.span`
  font-size: 3rem;
  font-weight: 500;
  color: var(--highlight-2);
  filter: brightness(1.2);
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  z-index: 299;

  @media (max-width: 800px) {
    text-align: ${({textAlignProjects800}) => textAlignProjects800};
  }

  @media (max-width: 800px) {
    text-align: ${({textAlignSkills800}) => textAlignSkills800};
  }
`;

function TitleSpan({children, textAlignProjects800, textAlignSkills800}) {
  return (
    <Span textAlignProjects800={textAlignProjects800} textAlignSkills800={textAlignSkills800}>
      {children}
    </Span>
  );
}

export default TitleSpan;
