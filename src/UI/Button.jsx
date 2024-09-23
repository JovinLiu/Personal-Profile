import {useState} from "react";
import styled from "styled-components";
import Img from "./Img";

const StyledButton = styled.button`
  font-size: 2rem;
  z-index: 99;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--dark);
  border: 0.001px solid var(--orange-0-5);
  background: none;
  padding: 1rem 5rem 1rem 3rem;
  font-size: 2rem;
  color: var(--light-0-95);
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(5px);
  transition: var(--transition-1);
  &:hover {
    color: var(--dark);
    background-color: var(--orange-0-5);
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
