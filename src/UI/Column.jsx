import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({align}) => align};
  justify-content: ${({justify}) => justify};
  margin-top: ${({marginTop}) => marginTop};
  height: ${({height}) => height};
  gap: ${({gap}) => gap};

  @media (max-width: 1100px) {
    margin-left: ${({marginLeftProject1100}) => marginLeftProject1100};
  }

  @media (max-width: 1000px) {
    margin-top: ${({marginTopAboutMe1000}) => marginTopAboutMe1000};
  }

  @media (max-width: 900px) {
    margin-top: ${({marginTopAboutMe900}) => marginTopAboutMe900};
  }

  @media (max-width: 800px) {
    height: ${({heightProjectCard800}) => heightProjectCard800};
    gap: ${({gapProject800}) => gapProject800};
    align-items: ${({alignSkills800}) => alignSkills800};
  }

  @media (max-width: 800px) {
    margin-top: ${({marginTopContact800}) => marginTopContact800};
    margin-left: ${({marginLeftProject800}) => marginLeftProject800};
  }

  @media (max-width: 700px) {
    margin-top: ${({marginTopAboutMe700}) => marginTopAboutMe700};
  }

  @media (max-width: 530px) {
    height: ${({heightProjectCard530}) => heightProjectCard530};
  }
`;

function Column({
  children,
  align,
  height,
  gap,
  marginTop,
  justify,
  marginTopAboutMe1000,
  marginTopAboutMe900,
  heightProjectCard800,
  gapProject800,
  marginLeftProject1100,
  alignSkills800,
  marginTopContact800,
  marginLeftProject800,
  marginTopAboutMe700,
  heightProjectCard530
}) {
  return (
    <Div
      align={align}
      justify={justify}
      height={height}
      gap={gap}
      marginTop={marginTop}
      marginTopAboutMe1000={marginTopAboutMe1000}
      marginTopAboutMe900={marginTopAboutMe900}
      heightProjectCard800={heightProjectCard800}
      gapProject800={gapProject800}
      marginLeftProject1100={marginLeftProject1100}
      alignSkills800={alignSkills800}
      marginTopContact800={marginTopContact800}
      marginLeftProject800={marginLeftProject800}
      marginTopAboutMe700={marginTopAboutMe700}
      heightProjectCard530={heightProjectCard530}
    >
      {children}
    </Div>
  );
}

export default Column;
