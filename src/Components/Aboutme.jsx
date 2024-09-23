import styled, {keyframes} from "styled-components";
import {useState} from "react";
import Tab from "../UI/Tab";
import Highlight from "../UI/Highlight";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  box-shadow:
    -0.5px 0 0 var(--light-0-95),
    0.5px 0 0 var(--light-0-95);
  border-bottom: 0.0001rem solid var(--light-0-2);
  z-index: 150;
`;

const P = styled.p`
  position: absolute;
  width: 60vw;
  height: 10vh;
  top: 10vh;
  left: 20vw;
  font-size: 1.5rem;
  color: var(--light-0-75);
  text-align: center;
  line-height: 3rem;
  z-index: 300;
`;

const AccordinDiv = styled.div`
  margin: 0 auto;
  padding-top: 40vh;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Tabs = styled.div`
  width: 40rem;
  height: 30rem;
  z-index: 200;
  border-left: 0.0001rem solid var(--light-0-2);
`;

const fadeIn = keyframes`
  from {
    opacity: 1;
    mix-blend-mode: overlay;
    z-index: 99;
  }
  to {
    opacity: 0;
    mix-blend-mode: overlay;
    z-index: 99;
  }
`;

const Img = styled.img`
  height: 50rem;
  z-index: 200;
  animation-name: ${fadeIn};
  animation-duration: 2s;
  animation-iteration-count: 1;
`;

const Span = styled.span`
  font-size: 2rem;
  font-weight: 500;
`;

const TagsAndImages = styled.div``;

function Aboutme() {
  const [open, setOpen] = useState(1);
  const tagName = ["Responsive Design", "State Management", "Event-Driven Philosophy", "Aesthetics"];
  const icon = ["brush-outline", "settings-outline", "analytics-outline", "flower-outline"];
  const image = ["frontend.webp", "backend.webp", "database.webp", "aesthetics.webp"];
  const tagContent = [
    "Responsive design entails creating web applications that seamlessly adapt to various screen sizes and devices.",
    "Effective state management involves coordinating application states from individual components to the entire application.",
    "The event-driven model operates by facilitating asynchronous operations, enabling versatile and responsive web services that enhance user interactions.",
    "Minimalist design principles emphasize the importance of clear and straightforward user interface."
  ];

  return (
    <Section id="aboutme">
      <P>
        <Span>Greetings, My name is Jovin Liu.</Span>
        <br />
        <br />I am a Full Stack Web Developer with a focus on creating web applications that seamlessly integrate functionality with visual appeal. My
        primary technical stack revolves around React for front-end development and Node.js for back-end services. Through a broad range of project
        experiences, I have honed my ability to design efficient solutions and tackle complex coding challenges. My passion for web development,
        enriched by these experiences, drives me to continually enhance the user experience in every project I undertake. I remain dedicated to
        staying current with industry trends, continuously expanding my knowledge and skill set in the ever-evolving field of technology. I invite you
        to explore my portfolio and connect with me.
      </P>
      <Highlight x={15} y={120} opacity="100%" colorA="--turquoise" colorB="--orange-0-15" size="75vh" />
      <AccordinDiv>
        <Tabs>
          {tagName.map((tag, i) => (
            <Tab key={i} open={open} setOpen={setOpen} index={i} content={tagContent[i]} icon={icon[i]}>
              {tag}
            </Tab>
          ))}
        </Tabs>
        <TagsAndImages>
          <Img src={image[open]} />
        </TagsAndImages>
      </AccordinDiv>
    </Section>
  );
}

export default Aboutme;
