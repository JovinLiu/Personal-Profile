import styled from "styled-components";

const StyledImg = styled.div`
  position: absolute;
  right: ${({right}) => right};
  top: ${({top}) => top};
  width: 1rem;
  opacity: ${({opacity}) => opacity};
  scale: ${({scale}) => scale};
  transition: var(--transition-1);
`;

function Img({hover, children}) {
  const opacity = hover ? 100 : 0;
  const scale = hover ? 1.1 : 1;
  const right = hover ? "-1.5rem" : "0rem";
  const top = hover ? "0.3rem" : "2.5rem";

  return (
    <StyledImg id="nav-button-img" opacity={opacity} scale={scale} right={right} top={top}>
      {children}
    </StyledImg>
  );
}

export default Img;
