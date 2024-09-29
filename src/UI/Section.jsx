import styled from "styled-components";

const StyledSection = styled.section`
  inset: 0;
  z-index: 150;
  min-height: ${({minHeight}) => minHeight};
  width: 100vw;
  margin: 0 auto;
  transition: var(--transition-4);
  border-bottom: 0.0001rem solid var(--light-0-2);
  position: ${({position}) => position};

  @media (max-width: 1050px) {
    min-height: ${({minHeightHero}) => minHeightHero};
  }

  @media (max-width: 700px) {
    min-height: ${({minHeightAboutMe700}) => minHeightAboutMe700};
  }

  @media (max-width: 550px) {
    min-height: ${({minHeightContact550}) => minHeightContact550};
  }

  @media (max-width: 450px) {
    min-height: ${({minHeightHero450}) => minHeightHero450};
  }

  @media (max-width: 550px) {
    min-height: ${({minHeightAboutMe550}) => minHeightAboutMe550};
  }
`;

function Section({
  children,
  minHeight,
  position,
  id,
  onMouseMove,
  ref,
  minHeightHero,
  minHeightHero450,
  minHeightAboutMe700,
  minHeightContact550,
  minHeightAboutMe550
}) {
  return (
    <StyledSection
      minHeight={minHeight}
      position={position}
      id={id}
      onMouseMove={onMouseMove}
      ref={ref}
      minHeightHero={minHeightHero}
      minHeightAboutMe700={minHeightAboutMe700}
      minHeightContact550={minHeightContact550}
      minHeightHero450={minHeightHero450}
      minHeightAboutMe550={minHeightAboutMe550}
    >
      {children}
    </StyledSection>
  );
}

export default Section;
