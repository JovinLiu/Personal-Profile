import styled from "styled-components";

const StyledSection = styled.section`
  inset: 0;
  z-index: 150;
  min-height: ${({minHeight}) => minHeight};
  width: 100vw;
  margin: 0 auto;
  transition: var(--transition-4);
  border-bottom: 0.0001rem solid var(--light-0-2);
  position: ${({position}) => position};
`;

function Section({children, minHeight, position, id, onMouseMove, ref, minHeightHero}) {
  return (
    <StyledSection minHeight={minHeight} position={position} id={id} onMouseMove={onMouseMove} ref={ref} minHeightHero={minHeightHero}>
      {children}
    </StyledSection>
  );
}

export default Section;
