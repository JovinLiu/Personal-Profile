import {useEffect, useState} from "react";
import styled from "styled-components";

const StyledCurtain = styled.div`
  width: 100vw;
  height: 50vh;
  position: fixed;
  top: ${({position, open}) => (position === "up" ? (open ? "-50vh" : "0") : open ? "100vh" : "50vh")};
  left: 0;
  z-index: 999;
  background-color: var(--dark);
  background-image: url("grain.webp");
  background-position: 0 0;
  background-size: 300px;
  border-top: ${({position}) => position === "down" && "0.0001rem solid var(--light-0-5)"};
  border-bottom: ${({position}) => position === "up" && "0.0001rem solid var(--light-0-5)"};
  transition: all 1s cubic-bezier(1, -0.01, 1, 1);
`;

function Curtain() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <StyledCurtain position="up" open={open} />
      <StyledCurtain position="down" open={open} />
    </>
  );
}

export default Curtain;
