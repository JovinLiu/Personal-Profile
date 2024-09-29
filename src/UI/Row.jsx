import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: "row";
  width: ${({width}) => width};
  align-items: ${({align}) => align};
  justify-content: ${({justify}) => justify};
  margin-top: ${({marginTop}) => marginTop};
  height: ${({height}) => height};
  gap: ${({gap}) => gap};

  @media (max-width: 950px) {
    gap: 2rem;
  }

  @media (max-width: 750px) {
    flex-direction: ${({directionAboutMe750}) => directionAboutMe750};
  }

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

function Row({children, align, height, gap, marginTop, justify, width, directionAboutMe750}) {
  return (
    <Div align={align} justify={justify} height={height} width={width} gap={gap} marginTop={marginTop} directionAboutMe750={directionAboutMe750}>
      {children}
    </Div>
  );
}

export default Row;
