import styled from "styled-components";
import SkillCard from "./../UI/SkillCard";
import {useEffect, useRef} from "react";

const Section = styled.section`
  height: 170vh;
  width: 100vw;
  position: relative;
  box-shadow:
    -0.5px 0 0 var(--light-0-95),
    0.5px 0 0 var(--light-0-95);
  border-bottom: 0.0001rem solid var(--light-0-2);
  z-index: 150;
`;

const P = styled.p`
  margin: 0 auto;
  width: ${({width}) => width};
  height: 10vh;
  font-size: 1.15vw;
  color: var(--light-0-75);
  text-align: ${({align}) => align};
  line-height: 5vh;
  font-weight: 300;
  z-index: 300;
  grid-column: ${({column}) => column};
  grid-row: ${({row}) => row};
`;

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
  row-gap: 5.5vh;
`;

function Skills() {
  const ref = useRef(null);
  const skillArr = [
    {
      category: "javascript",
      title: `JavaScript`,
      description: "Proficiently skilled in this fundamental web language, facilitating the development of interactive and dynamic websites.",
      top: "0.65rem",
      left: "0.65rem",
      scale: "0.8",
      bgcolor: "var(--yellow)"
    },
    {
      category: "css",
      title: `CSS`,
      description: "Proficient in this webpage styling, layout and animation language, producing visually attractive and responsive designs.",
      top: "0.38rem",
      left: "0.35rem",
      scale: "0.8",
      bgcolor: "var(--highlight-2)"
    },
    {
      category: "html",
      title: `HTML`,
      description: "Exhibits mastery of this fundamental markup language, enabling the effective structuring of web content.",
      top: "0.65rem",
      left: "0.65rem",
      scale: "0.8",
      bgcolor: "var(--orange)"
    },
    {
      category: "react",
      title: `React`,
      description:
        "Proficient in developing efficient and dynamic user interfaces using this widely adopted JavaScript library, utilizing its component-based architecture and state management from micro to macro.",
      top: "0.52rem",
      left: "0.54rem",
      scale: "0.8",
      bgcolor: "var(--react)"
    },
    {
      category: "sass",
      title: `Sass`,
      description: "",
      top: "0.65rem",
      left: "0.9rem",
      scale: "0.8",
      bgcolor: "var(--highlight-1)"
    },
    {
      category: "tailwindcss",
      title: `Tailwind CSS`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.55rem",
      left: "0.6rem",
      scale: "0.8",
      bgcolor: "var(--turquoise)"
    },
    {
      category: "styledcomponents",
      title: `Styled Components`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.6rem",
      left: "0.6rem",
      scale: "1",
      bgcolor: "var(--red)"
    },
    {
      category: "reactrouter",
      title: `React Router`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.55rem",
      left: "0.75rem",
      scale: "0.8",
      bgcolor: "var(--reactrouter)"
    },
    {
      category: "reactquery",
      title: `React Query`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.5rem",
      left: "0.53rem",
      scale: "0.8",
      bgcolor: "var(--reactquery)"
    },
    {
      category: "redux",
      title: `Redux`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.72rem",
      left: "0.76rem",
      scale: "0.8",
      bgcolor: "var(--redux)"
    },
    {
      category: "redux",
      title: `RTK Query`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.72rem",
      left: "0.76rem",
      scale: "0.8",
      bgcolor: "var(--redux)"
    },
    {
      category: "nodejs",
      title: `Node JS`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.7rem",
      left: "0.72rem",
      scale: "0.8",
      bgcolor: "var(--node)"
    },
    {
      category: "express",
      title: `Express`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.8rem",
      left: "0.8rem",
      scale: "0.8",
      bgcolor: "black"
    },
    {
      category: "supabase",
      title: `Supabase`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.78rem",
      left: "0.78rem",
      scale: "0.8",
      bgcolor: "var(--supabase)"
    },
    {
      category: "mongodb",
      title: `MongoDB`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.72rem",
      left: "0.72rem",
      scale: "0.8",
      bgcolor: "var(--mongodb)"
    },
    {
      category: "mongoose",
      title: `Mongoose`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.58rem",
      left: "0.55rem",
      scale: "0.95",
      bgcolor: "var(--mongoose)"
    },
    {
      category: "postman",
      title: `Postman`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.74rem",
      left: "0.75rem",
      scale: "1",
      bgcolor: "var(--postman)"
    },
    {
      category: "git",
      title: `Git`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.7rem",
      left: "0.75rem",
      scale: "0.8",
      bgcolor: "var(--git)"
    },
    {
      category: "github",
      title: `GitHub`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.6rem",
      left: "0.7rem",
      scale: "1",
      bgcolor: "black"
    },
    {
      category: "copilot",
      title: `Github Copilot`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.65rem",
      left: "0.7rem",
      scale: "0.8",
      bgcolor: "black"
    },
    {
      category: "vercel",
      title: `Vercel`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.7rem",
      left: "0.9rem",
      scale: "0.8",
      bgcolor: "black"
    },
    {
      category: "heroku",
      title: `Heroku`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "1rem",
      left: "1.1rem",
      scale: "0.8",
      bgcolor: "var(--heroku)"
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
    <Section id="skills">
      <SkillsContainer ref={ref}>
        {skillArr.map((skill, i) => (
          <SkillCard content={skill} key={i} />
        ))}
        <P width="23vw" align="right" column="-2 / -1" row="1 / 4">
          <Span>Web Tech Stack</Span>
          <br />
          <br />
          This web development toolkit, which I have mastered, empowers me to build dynamic and efficient web applications that encompass everything
          from user experience to database management. This diverse skill set is what fuels my journey in web development.
        </P>
        <P width="45vw" align="left" column="1 / -2" row="9 / 10">
          Through my unwavering dedication, I am broadening my skill set and working towards mastering new programming languages.
        </P>
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
