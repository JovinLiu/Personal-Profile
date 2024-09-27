import {useState} from "react";
import styled from "styled-components";
import Img from "./Img";

const A = styled.a`
  color: var(--light-0-95);
  transition: all 0.3s ease-in-out; /* transition-all */
  position: relative;
  cursor: pointer;
  &:hover {
    color: var(--dark);
  }
`;

function NavButton({children, icon, href, ref}) {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <>
      <A href={href} ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
        <Img hover={hover}>
          <ion-icon name={icon}></ion-icon>
        </Img>
      </A>
    </>
  );
}

export default NavButton;
