import styled from "styled-components";

const StyledSection = styled.section`
  min-height: ${({minheight}) => minheight};
  width: 100vw;
  box-shadow:
    -0.5px 0 0 var(--light-0-95),
    0.5px 0 0 var(--light-0-95);
  border-bottom: 0.0001rem solid var(--light-0-2);
  z-index: 150;
  transition: var(--transition-4);
  position: relative;
`;

function Section({children, minheight}) {
  return <StyledSection minheight={minheight}>{children}</StyledSection>;
}

export default Section;
