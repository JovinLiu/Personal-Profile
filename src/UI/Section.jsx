import styled from "styled-components";

const StyledSection = styled.section`
  inset: 0;
  z-index: 150;
  min-height: ${({minheight}) => minheight};
  width: 100vw;
  margin: 0 auto;
  transition: var(--transition-4);
  border-bottom: 0.0001rem solid var(--light-0-2);
  position: ${({position}) => position};
`;

function Section({children, minheight, position, id, onMouseMove, ref, mediaMinHeight}) {
  return (
    <StyledSection minheight={minheight} position={position} id={id} onMouseMove={onMouseMove} ref={ref} mediaMinHeight={mediaMinHeight}>
      {children}
    </StyledSection>
  );
}

export default Section;
