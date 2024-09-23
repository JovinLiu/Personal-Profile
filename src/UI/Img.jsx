import styled from "styled-components";

const StyledImg = styled.img`
  position: absolute;
  /* right: -1.5rem;
  top: 0.8rem; */
  right: ${({hover}) => (hover ? "-1.5rem" : "0rem")};
  top: ${({hover}) => (hover ? "0.8rem" : "2.5rem")};
  width: 1rem;
  opacity: ${({opacity}) => opacity};
  transition: var(--transition-2);
`;

function Img({hover}) {
  const opacity = hover ? 100 : 0;
  return <StyledImg opacity={opacity} src="../public/arrow-right-light.svg"></StyledImg>;
}

export default Img;
