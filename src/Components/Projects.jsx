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
  width: 80vw;
  margin: 0 auto;
  mix-blend-mode: overlay;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
        y={170}
        opacity="90%"
        colorB="--highlight-2"
        colorA="--orange-0-75"
        size="130vh"
        transition="var(--transition-4)"
        event="none"
        position="absolute"
      />
      <Section id="projects" minheight="calc(54vw + 84.5rem)" position="relative">
        <CardsContainer ref={ref}>
          <Column gap="5rem">
            <Span>Selected Projects</Span>
            <P width="23vw" align="left" fontsize="1.75rem" lineheight="6rem">
              Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.
            </P>
          </Column>
          {projectsArr.map((content, i) => (
            <ProjectsCard index={i + 1} key={i} content={content} />
          ))}
          <P column="2 / -1" width="45vw" align="right" fontsize="1.75rem" margintop="2rem" lineheight="6rem">
            With continuous effort and exploration in web development, more projects are on the way. These new ventures will showcase my growing
            skills and passion for innovation in the future, reflecting my dedication to pushing the boundaries of web development. Stay tuned!
          </P>
        </CardsContainer>
      </Section>
    </>
  );
}

export default Projects;
