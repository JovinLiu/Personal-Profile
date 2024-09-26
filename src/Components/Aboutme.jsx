import styled from "styled-components";
import {useEffect, useState} from "react";
import Tab from "../UI/Tab";
import Highlight from "../UI/Highlight";
import SmallTag from "../UI/SmallTag";
import Span from "../UI/TitleSpan";
import P from "../UI/TextContent";
import Section from "../UI/Section";
import Column from "../UI/Column";
import useLazyLoad from "../Hooks/useLazyLoad";

const AccordinDiv = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: var(--transition-4);
  z-index: 300;
`;

const Tabs = styled.div`
  width: 25vw;
  min-height: 45rem;
  z-index: 200;
`;

const Img = styled.img`
  transition: all 1s ease;
  z-index: 200;
  margin-top: 3rem;
  height: 40rem;
  width: auto;
`;

const TagsAndImages = styled.div`
  width: 30vw;
  height: 50rem;
  position: relative;
`;

const TagsContainer = styled.div`
  margin-top: 10rem;
  width: 25vw;
  height: 30rem;
  position: absolute;
  top: 0;
  left: 0;
`;

const Strong = styled.strong`
  color: var(--orange);
`;

function Aboutme() {
  const [open, setOpen] = useState(0);
  const ref = useLazyLoad();
  const tagName = ["Responsive Design", "User Oriented Experience", "Event Driven Philosophy", "Aesthetics"];
  const icon = ["brush-outline", "people-outline", "analytics-outline", "flower-outline"];
  const words = [
    ["Testing and Optimization", "Mobile-First", "Responsive Frameworks", "Adaptive Design"],
    ["User Experience", "Usability", "Accessibility", "Engagement"],
    ["Non-blocking I/O", "Event Loop", "Request Rsponse Cycle", "Concurrency"],
    ["Visual Hierarchy", "Minimalist", "Consistency", "Branding"]
  ];
  const tagContent = [
    "Responsive design involves developing web applications that dynamically adjust to different screen sizes and devices, ensuring accessibility for all users.",
    "Combining the eye of beauty with the web dev expertise, offering unique user-oriented experiences that merge both form and function in a balanced, aesthetically pleasing way.",
    "The event-driven model operates by facilitating asynchronous operations, enabling versatile and responsive web services that enhance user interactions.",
    "Minimalist design principles emphasize a clean, simple user interface, focusing on essential elements to enhance usability and provide a more intuitive experience across platforms."
  ];

  useEffect(() => {
    const img = document.getElementById("accordin-image");
    if (img) img.classList.add("fade-in");
  }, [open]);

  return (
    <>
      <Highlight
        x={10}
        y={120}
        opacity="100%"
        colorA="--turquoise"
        colorB="--orange-0-15"
        size="75vh"
        transition="var(--transition-4)"
        event="none"
        position="absolute"
      />
      <Section id="aboutme" minheight="120rem" ref={ref}>
        <Column align="center" height="40rem" gap="2rem" margintop="10rem">
          <Span>Greetings, I am Jovin Liu.</Span>
          <P width="70vw" align="center" fontsize="1.75rem" lineheight="4rem">
            <br />
            <br />I am a Full Stack Web Developer with a focus on creating web applications that seamlessly integrate functionality with visual
            appeal. My primary technical stack revolves around <Strong>React</Strong> for front-end development, <Strong>Node.js</Strong> for back-end
            services,
            <Strong> MongoDB</Strong> for NoSQL database, and <Strong>Supabase</Strong> for PostgreSQL database. Through a broad range of project
            experiences, I have honed my ability to design efficient solutions and tackle complex coding challenges. My passion for web development,
            enriched by these experiences, drives me to continually enhance the user experience in every project I undertake. I remain dedicated to
            staying current with industry trends, continuously expanding my knowledge and skill set in the ever-evolving field of technology. I invite
            you to explore my portfolio and connect with me.
          </P>
        </Column>
        <Column align="center" height="40rem" gap="2rem" margintop="10rem">
          <Span>My Philosophy</Span>
          <AccordinDiv>
            <Tabs>
              {tagName.map((tag, i) => (
                <Tab key={i} open={open} setOpen={setOpen} index={i} content={tagContent[i]} icon={icon[i]}>
                  {tag}
                </Tab>
              ))}
            </Tabs>
            <TagsAndImages>
              {open === 0 ? <Img src="frontend.webp" id="accordin-image" /> : null}
              {open === 1 ? <Img src="backend.webp" id="accordin-image" /> : null}
              {open === 2 ? <Img src="database.webp" id="accordin-image" /> : null}
              {open === 3 ? <Img src="aesthetics.webp" id="accordin-image" /> : null}
              <TagsContainer>
                {words[open].map((word, i) => (
                  <SmallTag key={i} index={i}>
                    {word}
                  </SmallTag>
                ))}
              </TagsContainer>
            </TagsAndImages>
          </AccordinDiv>
        </Column>
      </Section>
    </>
  );
}

export default Aboutme;
