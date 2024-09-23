import styled from "styled-components";

const MainContainer = styled.main`
  max-width: 100vw;
  height: 550vh;
  position: relative;
  overflow: hidden;
  background-color: var(--dark);
  background-image: linear-gradient(to top, var(--dark), #2f2c30);
`;

const Line = styled.div`
  height: 550vh;
  z-index: 100;
  position: absolute;
  left: ${({left}) => left};
  transform: ${({transform}) => transform};
  box-shadow: -0.0001rem 0 0 var(--light-0-5);
  color: var(--dark);
`;

const Grain = styled.div`
  width: 100vw;
  z-index: 99;
  pointer-events: none;
  mix-blend-mode: overlay;
  background-image: url("grain.webp");
  background-position: 0 0;
  background-size: 300px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

function Main({children}) {
  return (
    <MainContainer>
      <Grain />
      <Line transform="translateX(-50%)" left="50%">
        .
      </Line>
      <Line transform="translateX(50%)" left="5%">
        .
      </Line>
      <Line transform="translateX(50%)" left="95%">
        .
      </Line>
      {children}
    </MainContainer>
  );
}

export default Main;
