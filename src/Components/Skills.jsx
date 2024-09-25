import styled from "styled-components";
import SkillCard from "./../UI/SkillCard";

const Section = styled.section`
  height: 150vh;
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
`;

const SkillsContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  mix-blend-mode: overlay;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 5vh;
  margin-bottom: 15vh;
  row-gap: 5.5vh;
`;

function Skills() {
  const skillArr = [
    {
      category: "javascript",
      title: `JavaScript`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd",
      top: "0.27vw",
      left: "0.26vw",
      scale: "0.75",
      bgcolor: "var(--yellow)"
    },
    {
      category: "css",
      title: `CSS`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "html",
      title: `HTML`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "sass",
      title: `Sass`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "tailwindcss",
      title: `Tailwind CSS`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "styledcomponents",
      title: `Styled Components`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "react",
      title: `React`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "reactrouter",
      title: `React Router`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "reactquery",
      title: `React Query`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "redux",
      title: `Redux`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "redux",
      title: `RTK Query`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "nodejs",
      title: `Node JS`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "express",
      title: `Express`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "supabase",
      title: `Supabase`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "mongodb",
      title: `MongoDB`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "mongoose",
      title: `Mongoose`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "postman",
      title: `Postman`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "git",
      title: `Git`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "github",
      title: `GitHub`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "copilot",
      title: `Github Copilot`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "vercel",
      title: `Vercel`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    },
    {
      category: "heroku",
      title: `Heroku`,
      description: "asdjasdhahsdhahsdhacxhhsdjhdsklsdkasdkjajsdjasjdasd"
    }
  ];
  return (
    <Section id="skills">
      <SkillsContainer>
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
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
