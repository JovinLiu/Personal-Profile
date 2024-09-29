//Library
import styled from "styled-components";
import useLazyLoad from "../Hooks/useLazyLoad";
//Components
import ProjectsCard from "./../UI/ProjectsCard";
import Highlight from "../UI/Highlight";
import Span from "../UI/TitleSpan";
import P from "../UI/TextContent";
import Section from "../UI/Section";
import Column from "../UI/Column";
//Data
import projectsArr from "../Data/projects";
//Style
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80vw;
  margin: 0 auto;
  mix-blend-mode: overlay;
  justify-items: center;
  margin-top: 20rem;
  row-gap: 5.5rem;

  @media (max-width: 1100px) {
    width: 90vw;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin-top: 10rem;
    row-gap: 10rem;
  }
`;

function Projects() {
  const ref = useLazyLoad();

  return (
    <>
      <Highlight
        x={90}
        y={190}
        opacity="90%"
        primary="--orange-0-75"
        secondary="--blue-0-75"
        size="100vw"
        transition="var(--transition-4)"
        event="none"
        position="absolute"
      />
      <Section id="projects" minHeight="calc(54vw + 84.5rem)" position="relative">
        <CardsContainer ref={ref}>
          <Column gap="5rem" gapProject800="10rem" marginLeftProject1100="5rem" marginLeftProject800="0">
            <Span textAlignProjects800="center">Selected Projects</Span>
            <P
              width="23vw"
              widthProjects800="80vw"
              align="left"
              alignProjects800="center"
              fontSize="1.75rem"
              lineHeight="4rem"
              color="var(--light-0-75)"
              marginTopProjects1050="-3rem"
            >
              Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.
            </P>
          </Column>
          {projectsArr.map((content, i) => (
            <ProjectsCard index={i + 1} key={i} content={content} />
          ))}
          <P
            column="2 / -1"
            width="45vw"
            align="right"
            color="var(--light-0-75)"
            fontSize="1.75rem"
            marginTop="2rem"
            marginTopProjects1050="-3rem"
            lineHeight="4rem"
            widthProjects800="80vw"
            alignProjects800="center"
          >
            With continuous effort and exploration in web development, more projects are on the way. These new ventures will showcase my growing
            skills and passion for innovation in the future, reflecting my dedication to pushing the boundaries of web development. Stay tuned!
          </P>
        </CardsContainer>
      </Section>
    </>
  );
}

export default Projects;
