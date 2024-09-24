import styled from "styled-components";
import Card from "./../UI/Card";
import Highlight from "../UI/Highlight";
import {useEffect, useRef} from "react";

const Section = styled.section`
  height: 200vh;
  width: 100vw;
  box-shadow:
    -0.5px 0 0 var(--light-0-95),
    0.5px 0 0 var(--light-0-95);
  border-bottom: 0.0001rem solid var(--light-0-2);
  z-index: 150;
  position: relative;
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
  row-gap: 3vh;
`;

const Span = styled.span`
  font-size: 4rem;
  font-weight: 500;
  color: var(--orange);
`;

const P = styled.p`
  margin: 0 auto;
  margin-top: 10vh;
  width: ${({width}) => width};
  height: 10vh;
  font-size: 1.75rem;
  color: var(--light-0-75);
  text-align: left;
  line-height: 5vh;
  font-weight: 300;
  z-index: 300;
  grid-column: ${({column}) => column};
`;

function Projects() {
  const ref = useRef(null);
  const cardArr = [
    {
      title: "my Web Dev Hub",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["React", "Redux", "RTK Query", "Styled Components", "NodeJS", "Express", "MongoDB", "Mongoose"],
      translate: "-5vh",
      href: "https://my-web-dev-hub.vercel.app/"
    },
    {
      title: "The Wild Oasis",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["React", "Style Components", "React Query", "React Router", "Supabase", "Recharts"],
      translate: "-9vh",
      href: "https://the-wild-oasis-management-system-jovin.vercel.app/dashboard"
    },
    {
      title: "Natours",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["NodeJS", "Express", "Sass", "MongoDB", "Mongoose", "Json Web Token", "Pug", "Stripe"],
      translate: "-1vh",
      href: "https://natours-api-ssr.onrender.com/"
    },
    {
      title: "WorldWise",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["React", "React Router", "Context API", "Leaflet"],
      translate: "-5vh",
      href: "https://worldwise-jovin.vercel.app/"
    },
    {
      title: "Fast React Pizza Co.",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["React", "Redux", "React Router", "Tailwind CSS"],
      translate: "-9vh",
      href: "https://fast-react-pizza-jovin.vercel.app/"
    },
    {
      title: "Forkify",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["Javascript", "HTML", "Sass"],
      translate: "-1vh",
      href: "https://forkify-jovin.vercel.app/"
    },
    {
      title: "Omnifood",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["HTML", "CSS"],
      translate: "-5vh",
      href: "https://omnifood-jovin.vercel.app/"
    },
    {
      title: "Minimalist bank",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["Javascript", "HTML", "CSS"],
      translate: "-9vh",
      href: "#"
    },
    {
      title: "usePopCorn",
      description: `Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.`,
      skills: ["React"],
      translate: "-1vh",
      hreef: "https://use-popcorn-jovin.vercel.app/"
    }
  ];

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
        y={150}
        opacity="90%"
        colorB="--highlight-2"
        colorA="--orange-0-75"
        size="130vh"
        transition="var(--transition-4)"
        event="none"
        position="absolute"
      />
      <Section id="projects">
        <CardsContainer ref={ref}>
          <P width="23vw">
            <Span>Selected Projects</Span>
            <br />
            <br />
            Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.
          </P>
          {cardArr.map((content, i) => (
            <Card index={i + 1} key={i} content={content} />
          ))}
          <P column="2 / -1" width="40vw">
            With continuous effort and exploration in web development, more projects are on the way. These new ventures will showcase my growing
            skills and passion for innovation in the future, reflecting my dedication to pushing the boundaries of web development. Stay tuned!
          </P>
        </CardsContainer>
      </Section>
    </>
  );
}

export default Projects;
