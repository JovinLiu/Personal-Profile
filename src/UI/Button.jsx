import styled from "styled-components";
import Img from "./Img";
import {useState} from "react";

const StyledButton = styled.button`
  z-index: 9999;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--dark);
  border: 0.001px solid var(--orange);
  background: none;
  padding: 1rem 3rem 1rem 3rem;
  font-size: 2rem;
  position: relative;
  color: var(--light-0-5);
  background-color: var(--orange-0-05);
  transition: var(--transition-1);
  &:hover {
    color: var(--light-0-95);
    background-color: var(--orange-0-15);
  }
`;

function Button({children}) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
