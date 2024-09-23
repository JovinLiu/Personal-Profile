import {useState} from "react";
import styled from "styled-components";
import Img from "./Img";

const A = styled.a`
  color: var(--light-0-5);
  transition: all 0.3s; /* transition-all */
  position: relative;
  &:hover {
    color: var(--light-0-95);
  }
`;

function NavButton({children}) {
  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <>
      <A href="#" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        {children}
        <Img hover={hover} />
      </A>
    </>
  );
}

export default NavButton;
