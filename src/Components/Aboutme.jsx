import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import Tab from "../UI/Tab";
import Highlight from "../UI/Highlight";
import SmallTag from "../UI/SmallTag";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  box-shadow:
    -0.5px 0 0 var(--light-0-95),
    0.5px 0 0 var(--light-0-95);
  border-bottom: 0.0001rem solid var(--light-0-2);
  z-index: 150;
  transition: var(--transition-4);
  position: relative;
`;

const P = styled.p`
  margin: 0 auto;
  margin-top: 10vh;
  width: 70vw;
  height: 10vh;
  font-size: 1.15vw;
  color: var(--light-0-75);
  text-align: center;
  line-height: 3vh;
  font-weight: 300;
  z-index: 300;
  transition: var(--transition-4);
`;

const Span = styled.span`
  font-size: 1.75vw;
  font-weight: 500;
  color: var(--orange);
  filter: brightness(1.2);
`;

const AccordinDiv = styled.div`
  margin: 0 auto;
  margin-top: 30vh;
  height: 50vh;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: var(--transition-4);
  z-index: 300;
`;

const Tabs = styled.div`
  width: 25vw;
  height: 50vh;
  z-index: 200;
`;

const Img = styled.img`
  transition: all 1s ease;
  z-index: 200;
  margin-top: 5vh;
  height: 40vh;
  width: auto;
`;

const TagsAndImages = styled.div`
  width: 30vw;
  height: 50vh;
  position: relative;
`;

const TagsContainer = styled.div`
  margin-top: 10vh;
  width: 25vw;
  height: 30vh;
  position: absolute;
  top: 0;
  left: 0;
`;

function Aboutme() {
  const [open, setOpen] = useState(0);
  const ref = useRef(null);
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
    "Combining the eye of beauty with the web development expertise, offering unique user-oriented experiences that merge both form and function in a balanced, aesthetically pleasing way.",
    "The event-driven model operates by facilitating asynchronous operations, enabling versatile and responsive web services that enhance user interactions.",
    "Minimalist design principles emphasize a clean, simple user interface, focusing on essential elements to enhance usability and provide a more intuitive experience across platforms."
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

  useEffect(() => {
    const img = document.getElementById("accordin-image");
    if (img) img.classList.add("fade-in");
  }, [open]);

  return (
    <>
      <Highlight
        x={10}
        y={105}
        opacity="100%"
        colorA="--turquoise"
        colorB="--orange-0-15"
        size="75vh"
        transition="var(--transition-4)"
        event="none"
        position="absolute"
      />
      <Section id="aboutme" ref={ref}>
        <P>
          <Span>Greetings, I am Jovin Liu.</Span>
          <br />
          <br />I am a Full Stack Web Developer with a focus on creating web applications that seamlessly integrate functionality with visual appeal.
          My primary technical stack revolves around React for front-end development and Node.js for back-end services. Through a broad range of
          project experiences, I have honed my ability to design efficient solutions and tackle complex coding challenges. My passion for web
          development, enriched by these experiences, drives me to continually enhance the user experience in every project I undertake. I remain
          dedicated to staying current with industry trends, continuously expanding my knowledge and skill set in the ever-evolving field of
          technology. I invite you to explore my portfolio and connect with me.
        </P>
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
      </Section>
    </>
  );
}

export default Aboutme;
