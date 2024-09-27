//Library
import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import useWindowWidth from "../Hooks/useWindowWidth";
//Components
import Tab from "../UI/Tab";
import Highlight from "../UI/Highlight";
import SmallTag from "../UI/SmallTag";
import Span from "../UI/TitleSpan";
import P from "../UI/TextContent";
import Section from "../UI/Section";
import Column from "../UI/Column";
//Data
import {tagName, icon, words, tagContent} from "../Data/Aboutme";
import Row from "../UI/Row";
//Style
const MyPhilosophy = styled.div`
  margin: 0 auto;
  width: 80vw;
  transition: var(--transition-4);
  z-index: 300;
`;

const Tabs = styled.div`
  height: 45rem;
  width: 25vw;
  z-index: 200;

  @media (max-width: 430px) {
    width: 90vw;
  }
`;

const TagsAndImages = styled.div`
  height: 45rem;
  width: 25vw;
  position: relative;

  @media (max-width: 430px) {
    width: 90vw;
    position: absolute;
  }
`;

const Img = styled.img`
  transition: all 1s ease;
  z-index: 200;
  height: 45rem;
  width: 25vw;

  @media (max-width: 430px) {
    filter: grayscale(0.6) brightness(1.2);
    width: 90vw;
  }
`;

const TagsContainer = styled.div`
  height: 45rem;
  width: 25vw;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 430px) {
    display: none;
  }
`;

const Strong = styled.strong`
  color: var(--orange);
`;

function Aboutme() {
  const [open, setOpen] = useState(0);
  const ref = useRef(null);
  const width = useWindowWidth();

  let minheight = "120rem";
  let widthP = "70vw";
  let margintopColumn = "10rem";
  let direction = "row";

  useEffect(() => {
    switch (true) {
      case width <= 430:
        minheight = "165rem";
        widthP = "85vw";
        margintopColumn = "60rem";
        direction = "column";
        break;
    }
  }, [width]);

  useEffect(() => {
    const revealCard = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("move-up-fade-in");
          entry.target.style.opacity = 1;
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      threshold: 0.1,
      rootMargin: "-100px"
    };

    const cardObserver = new IntersectionObserver(revealCard, options);

    if (ref.current) {
      ref.current.childNodes.forEach((el) => {
        el.style.opacity = 0;
        cardObserver.observe(el); // 这里使用 el 代替 card
      });
    }

    return () => {
      cardObserver.disconnect();
    };
  }, [ref]);

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
      <Section id="aboutme" minheight={minheight} position="relative">
        <Column align="center" height="40rem" gap="2rem" margintop="10rem" ref={ref}>
          <Span>Greetings, I am Jovin Liu</Span>
          <P width={widthP} align="center" fontsize="1.75rem" lineheight="4rem">
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
        <Column align="center" height="40rem" gap="2rem" margintop={margintopColumn}>
          <MyPhilosophy>
            <Column margintop="2.5rem" align="center">
              <Span>My Philosophy</Span>
              <Row margintop="5rem" align="center" gap="10vw" direction={direction}>
                <Tabs>
                  {tagName.map((tag, i) => (
                    <Tab key={i} open={open} setOpen={setOpen} index={i} width="100%" content={tagContent[i]} icon={icon[i]}>
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
              </Row>
            </Column>
          </MyPhilosophy>
        </Column>
      </Section>
    </>
  );
}

export default Aboutme;
