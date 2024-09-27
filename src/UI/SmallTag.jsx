import styled from "styled-components";

const StyledTag = styled.div`
  position: absolute;
  top: ${({x}) => x}%;
  left: ${({y}) => y}%;
  font-size: 75%;
  width: fit-content;
  z-index: 99;
  border: 0.001px solid var(--blue-0-5);
  padding: 1rem;
  color: var(--light-0-95);
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(5px);
  transition: var(--transition-1);
  white-space: nowrap;
  text-transform: uppercase;
  &:hover {
    color: var(--dark);
    background-color: var(--blue-0-5);
    scale: 1.2;
    z-index: 200;
  }
`;

function SmallTag({children, index}) {
  function calcX() {
    return (Math.random() * 100).toFixed(0) * 1;
  }

  function calcY() {
    return (Math.random() * 100).toFixed(0) * 1;
  }

  let x = calcX();
  while (x < 0 || x > 100) {
    x = calcX();
  }

  let y = calcY();
  while (y < 0 || y > 100) {
    y = calcY();
  }

  return (
    <StyledTag x={x} y={y} fadeintime={index}>
      <span>{children}</span>
    </StyledTag>
  );
}

export default SmallTag;
