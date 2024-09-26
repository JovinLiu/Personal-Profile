import styled from "styled-components";
import SkillsCard from "./../UI/SkillsCard";
import Section from "./../UI/Section";
import P from "./../UI/TextContent";
import GridPosition from "../UI/GridPosition";
import Column from "../UI/Column";
import skillArr from "../Data/skills";
import useLazyLoad from "../Hooks/useLazyLoad";

const Span = styled.span`
  font-size: 1.75vw;
  font-weight: 500;
  color: var(--orange);
  filter: brightness(1.2);
  text-transform: uppercase;
`;

const SkillsContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  mix-blend-mode: overlay;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 15vh;
  margin-bottom: 15vh;
  row-gap: 4rem;
`;

function Skills() {
  const ref = useLazyLoad();

  return (
    <Section id="skills" minheight="190rem">
      <SkillsContainer ref={ref}>
        {skillArr.map((skill, i) => (
          <SkillsCard content={skill} key={i} />
        ))}
        <GridPosition column="-2 / -1" row="1 / 4">
          <Column align="end" gap="10rem">
            <Span>Web Tech Stack</Span>
            <P width="23vw" align="right" fontsize="1.75rem" lineheight="4rem">
              This web development toolkit, which I have mastered, empowers me to build dynamic and efficient web applications that encompass
              everything from user experience to database management. This diverse skill set is what fuels my journey in web development.
            </P>
          </Column>
        </GridPosition>
        <GridPosition column="1 / 2" row="9 / 10">
          <P width="22vw" align="left" fontsize="1.75rem" lineheight="4rem" margintop="1rem">
            Through my unwavering dedication, I am broadening my skill set and working towards mastering new programming languages.
          </P>
        </GridPosition>
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
