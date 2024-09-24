import styled from "styled-components";
import Card from "./../UI/Card";
import Highlight from "../UI/Highlight";

const Section = styled.section`
  height: 190vh;
  width: 100vw;
  position: relative;
  box-shadow:
    -0.5px 0 0 var(--light-0-95),
    0.5px 0 0 var(--light-0-95);
  border-bottom: 0.0001rem solid var(--light-0-2);
  z-index: 150;
`;

const CardsContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  mix-blend-mode: overlay;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 15vh;
  margin-bottom: 15vh;
  row-gap: 5vh;
  column-gap: 5vh;
`;

const Span = styled.span`
  font-size: 2.75rem;
  font-weight: 500;
  color: var(--orange-0-5);
`;

const P = styled.p`
  margin: 0 auto;
  margin-top: 10vh;
  width: 75vw;
  height: 10vh;
  font-size: 1.75rem;
  color: var(--light-0-75);
  text-align: center;
  line-height: 5vh;
  font-weight: 300;
  z-index: 300;
  transition: var(--transition-4);
`;

function Projects() {
  const cardArr = [
    {
      title: "my Web Dev Hub",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["React", "Redux", "RTK Query", "NodeJS+Express", "MongoDB+Mongoose"]
    },
    {
      title: "The Wild Oasis",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["React", "Style Component", "React Query", "React Router", "SupaBase"]
    },
    {
      title: "Natours",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["NodeJS+Express", "MongoDB+Mongoose", "Pug", "Stripe"]
    },
    {
      title: "WorldWise",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["React", "Context API", "Leaflet"]
    },
    {
      title: "Fast React Pizza Co.",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["React", "Context API", "Tailwind CSS"]
    },
    {
      title: "Forkify",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["Javascript", "HTML", "CSS"]
    },
    {
      title: "usePopCorn",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["React"]
    },
    {
      title: "Omnifood",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["HTML", "CSS"]
    },
    {
      title: "Minimalist bank",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["Javascript", "HTML", "CSS"]
    }
  ];

  return (
    <Section id="projects">
      <P>
        <Span>Selected Projects</Span>
        <br />
        <br />
        Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.
      </P>
      <CardsContainer>
        {cardArr.map((content, i) => (
          <Card index={i + 1} key={i} content={content} />
        ))}
      </CardsContainer>
      <Highlight
        x={90}
        y={-40}
        opacity="100%"
        colorB="--highlight-2"
        colorA="--orange-0-75"
        size="130vh"
        transition="var(--transition-4)"
        event="none"
      />
    </Section>
  );
}

export default Projects;
