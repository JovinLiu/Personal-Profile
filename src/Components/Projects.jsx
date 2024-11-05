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
        size="70vw"
        transition="var(--transition-4)"
        event="none"
        position="absolute"
      />
      <Section id="projects" minHeight="calc(54vw + 84.5rem)" position="relative">
        <CardsContainer id="projects-cards-container" ref={ref}>
          <Column id="projects-column" gap="5rem">
            <Span id="projects-title-span">Selected Projects</Span>
            <P id="projects-text-content-a" width="23vw" align="left" fontSize="1.5rem" lineHeight="4rem" color="var(--light-0-75)">
              Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.
            </P>
          </Column>
          {projectsArr.map((content, i) => (
            <ProjectsCard index={i + 1} key={i} content={content} />
          ))}
          <P
            id="projects-text-content-b"
            column="3 / -1"
            width="22vw"
            align="right"
            color="var(--light-0-75)"
            fontSize="1.5rem"
            marginTop="-4rem"
            lineHeight="4rem"
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
