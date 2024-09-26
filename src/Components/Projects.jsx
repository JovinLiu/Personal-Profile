import styled from "styled-components";
import ProjectsCard from "./../UI/ProjectsCard";
import Highlight from "../UI/Highlight";
import {useEffect, useRef} from "react";
import Span from "../UI/TitleSpan";
import P from "../UI/TextContent";
import Section from "../UI/Section";
import Column from "../UI/Column";
import projectsArr from "../Data/projects";

const CardsContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  mix-blend-mode: overlay;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 20vh;
  row-gap: 5.5vh;
`;

function Projects() {
  const ref = useRef(null);

  useEffect(function () {
    if (!ref?.current?.childNodes) return;

    const revealCard = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("move-up-fade-in");
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      });
    };

    const options = {root: null, thresholds: 0.1, rootMargin: "-100px"};

    const cardObserver = new IntersectionObserver(revealCard, options);

    Array.from(ref?.current?.childNodes).forEach((card) => {
      card.style.opacity = 0;
      cardObserver.observe(card);
    });

    return () => {
      if (cardObserver) cardObserver.disconnect();
    };
  }, []);

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
      <Section id="projects" height="160vh">
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
          <P column="2 / -1" width="45vw" align="right" fontsize="1.75rem" margintop="2vh" lineheight="6rem">
            With continuous effort and exploration in web development, more projects are on the way. These new ventures will showcase my growing
            skills and passion for innovation in the future, reflecting my dedication to pushing the boundaries of web development. Stay tuned!
          </P>
        </CardsContainer>
      </Section>
    </>
  );
}

export default Projects;
