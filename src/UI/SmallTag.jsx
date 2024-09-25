import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: ${({x}) => x}%;
  left: ${({y}) => y}%;
  font-size: 75%;
  z-index: 99;
  border: 0.001px solid var(--blue-0-5);
  padding: 1rem;
  color: var(--light-0-95);
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(5px);
  transition: var(--transition-1);
  white-space: nowrap;
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
  while (x < 20 || x > 80) {
    x = calcX();
  }

  let y = calcY();
  while (y < 20 || y > 80) {
    y = calcY();
  }

  return (
    <StyledButton x={x} y={y} fadeintime={index}>
      <span>{children}</span>
    </StyledButton>
  );
}

export default SmallTag;
