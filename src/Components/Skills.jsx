//Library
import styled from "styled-components";
import useLazyLoad from "../Hooks/useLazyLoad";
//Components
import SkillsCard from "./../UI/SkillsCard";
import Section from "./../UI/Section";
import P from "./../UI/TextContent";
import GridPosition from "../UI/GridPosition";
import Column from "../UI/Column";
import Span from "../UI/TitleSpan";
//Data
import skillArr from "../Data/skills";
//Style

const SkillsContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  mix-blend-mode: overlay;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 15rem;
  margin-bottom: 15rem;
  row-gap: 4rem;
`;

function Skills() {
  const ref = useLazyLoad();

  return (
    <Section id="skills" minHeight="200rem" position="relative">
      <SkillsContainer id="skills-container" ref={ref}>
        <GridPosition column="-2 / -1" row="1 / 4">
          <Column id="skills-column" align="end" gap="10rem">
            <Span id="skills-title-span">Web Tech Stacks</Span>
            <P id="skills-text-box-a" width="23vw" align="right" fontSize="1.75rem" lineHeight="4rem" color="var(--light-0-75)">
              This web development toolkit, which I have mastered, empowers me to build dynamic and efficient web applications that encompass
              everything from user experience to database management. This diverse skill set is what fuels my journey in web development.
            </P>
          </Column>
        </GridPosition>
        {skillArr.map((skill, i) => (
          <SkillsCard content={skill} key={i} />
        ))}
        <GridPosition column="1 / 2" row="9 / 10">
          <P id="skills-text-box-b" width="22vw" align="left" fontSize="1.75rem" lineHeight="4rem" marginTop="1rem" color="var(--light-0-75)">
            Through my unwavering dedication, I am broadening my skill set and working towards mastering new programming languages.
          </P>
        </GridPosition>
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
