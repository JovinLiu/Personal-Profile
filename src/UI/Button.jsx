import {useState} from "react";
import styled from "styled-components";
import Img from "./Img";

const StyledButton = styled.button`
  z-index: 99;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--dark);
  border: 0.001px solid var(--blue-0-5);
  height: 5vh;
  padding: 0 2vw 0 1vw;
  font-size: 1.5vh;
  color: var(--light-0-95);
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(5px);
  transition: var(--transition-1);
  white-space: nowrap;
  &:hover {
    color: var(--dark);
    background-color: var(--blue-0-5);
  }
`;

const Span = styled.span`
  position: relative;
`;

function Button({children, icon}) {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <StyledButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Span>
        {children}
        <Img hover={hover}>
          <ion-icon name={icon}></ion-icon>
        </Img>
      </Span>
    </StyledButton>
  );
}

export default Button;
