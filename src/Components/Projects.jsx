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
  margin-top: 12vh;
  margin-bottom: 15vh;
  row-gap: 5.5vh;
`;

const Span = styled.span`
  font-size: 1.75vw;
  font-weight: 500;
  color: var(--orange);
  text-transform: uppercase;
`;

const P = styled.p`
  margin: 0 auto;
  margin-top: 10vh;
  width: ${({width}) => width};
  height: 10vh;
  font-size: 1.15vw;
  color: var(--light-0-75);
  text-align: ${({align}) => align};
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
      description: `A lightweight and highly efficient blog platform tailored to document and share your ongoing web development learning experiences. This blog is optimized for speed and simplicity, offering a seamless user experience.`,
      skills: ["React", "Redux", "RTK Query", "Styled Components", "NodeJS", "Express", "MongoDB", "Mongoose", "React-Markdown"],
      top: "-5vh",
      href: "https://my-web-dev-hub.vercel.app/"
    },
    {
      title: "The Wild Oasis",
      description: `A comprehensive hospitality administration system specifically designed to streamline staff operations, featuring an intuitive user interface that emphasizes both ease of use and an elegant, modern aesthetic.`,
      skills: ["React", "Style Components", "React Query", "React Router", "Supabase", "Recharts"],
      top: "-9vh",
      href: "https://the-wild-oasis-management-system-jovin.vercel.app/dashboard"
    },
    {
      title: "Natours",
      description: `A server side renderred dynamic tourism web application designed to cater to both tourists and administrators, enabling users to seamlessly book tours, make secure payments, and manage travel itineraries all within one platform. `,
      skills: ["NodeJS", "Express", "Sass", "MongoDB", "Mongoose", "Json Web Token", "Pug", "Stripe"],
      top: "-1vh",
      href: "https://natours-api-ssr.onrender.com/"
    },
    {
      title: "WorldWise",
      description: `An interactive application featuring a world map, allowing users to effortlessly record and visually track their travel history, including when and where they've been. With this app, users can mark destinations, add travel dates, and even include personal notes or memories for each location. `,
      skills: ["React", "React Router", "Context API", "Leaflet"],
      top: "-5vh",
      href: "https://worldwise-jovin.vercel.app/"
    },
    {
      title: "Fast React Pizza Co.",
      description: `A user-friendly pizza ordering website that allows customers to quickly browse available menu options and place their orders online. The platform features a seamless interface, offering geo-positioning feature, real-time order tracking, and options for prioritizing orders, providing a convenient and efficient way to order pizza with just a few clicks.`,
      skills: ["React", "Redux", "React Router", "Tailwind CSS"],
      top: "-9vh",
      href: "https://fast-react-pizza-jovin.vercel.app/"
    },
    {
      title: "Forkify",
      description: `A comprehensive food recipe web app designed for everyone built using object-oriented programming principles. Type in what you want to cook, then you will see the recipt, Whether you're a beginner or an experienced cook, the website offers a seamless way to discover, save, and share delicious recipes.`,
      skills: ["Javascript", "HTML", "Sass"],
      top: "-1vh",
      href: "https://forkify-jovin.vercel.app/"
    },
    {
      title: "Omnifood",
      description: `A revolutionary 365-days-per-year smart food subscription website designed to help you eat well and healthy. This website is tailored to your personal tastes and nutritional needs, ensuring that every meal is both delicious and nutritionally balanced.`,
      skills: ["HTML", "CSS"],
      top: "-5vh",
      href: "https://omnifood-jovin.vercel.app/"
    },
    {
      title: "Minimalist bank",
      description: `A modern bank website featuring dynamic animations and traditional DOM manipulation techniques. Without a modern web development framework to streamline functionality, traditional DOM manipulation still remains essential for certain website interactivity.`,
      skills: ["Javascript", "HTML", "CSS"],
      top: "-9vh",
      href: "#"
    },
    {
      title: "usePopCorn",
      description: `A movie review application that allows you to effortlessly record the films you've watched while providing an intuitive interface for rating each movie.`,
      skills: ["React"],
      top: "-1vh",
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
        y={210}
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
          <P width="23vw" align="left">
            <Span>Selected Projects</Span>
            <br />
            <br />
            Explore a curated showcase of my projects that highlight my skills, creativity, and commitment to web development.
          </P>
          {cardArr.map((content, i) => (
            <Card index={i + 1} key={i} content={content} />
          ))}
          <P column="2 / -1" width="40vw" align="right">
            With continuous effort and exploration in web development, more projects are on the way. These new ventures will showcase my growing
            skills and passion for innovation in the future, reflecting my dedication to pushing the boundaries of web development. Stay tuned!
          </P>
        </CardsContainer>
      </Section>
    </>
  );
}

export default Projects;
