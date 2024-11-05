//Library
import {useEffect, useState} from "react";
import styled from "styled-components";
import useLazyLoad from "../Hooks/useLazyLoad";
//Components
import Tab from "../UI/Tab";
// import Highlight from "../UI/Highlight";
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
  margin-top: 4rem;
  height: 45rem;
  width: 25vw;
  z-index: 200;
`;

const TagsAndImages = styled.div`
  margin-top: 4rem;
  height: 45rem;
  width: 25vw;
  position: relative;
`;

const Img = styled.img`
  transition: all 1s ease;
  z-index: 200;
  height: 45rem;
  width: 25vw;
`;

const TagsContainer = styled.div`
  height: 45rem;
  width: 25vw;
  position: absolute;
  top: 0;
  left: 0;
`;

const Strong = styled.strong`
  color: var(--indigo);
  font-weight: 600;
`;

function Aboutme() {
  const [open, setOpen] = useState(0);
  const ref = useLazyLoad();

  useEffect(() => {
    const img = document.getElementById("accordin-image");
    if (img) img.classList.add("fade-in");
  }, [open]);

  return (
    <>
      {/* <Highlight
        x={10}
        y={120}
        opacity="100%"
        primary="--turquoise"
        secondary="--orange-0-15"
        size="75vw"
        transition="var(--transition-4)"
        event="none"
        position="absolute"
      /> */}
      <Section id="aboutme" minHeight="120rem" position="relative">
        <div ref={ref}>
          <Column id="aboutme-column-a" align="center" gap="2rem" marginTop="8rem">
            <Span>Greetings, I am Jovin Liu</Span>
            <P id="aboutme-text-box" width="70vw" align="center" fontSize="1.75rem" lineHeight="4rem" color="var(--light-0-75)">
              <br />
              <br />I am a Full Stack Web Developer with a focus on creating web applications that seamlessly integrate functionality with visual
              appeal. My primary technical stack revolves around <Strong>React</Strong> for front-end development, <Strong>Node.js</Strong> for
              back-end services, <Strong>Next.js</Strong> for full stack development,
              <Strong> MongoDB</Strong> for NoSQL database, and <Strong>Supabase</Strong> for PostgreSQL database. Through a broad range of project
              experiences, I have honed my ability to design efficient solutions and tackle complex coding challenges. My passion for web development,
              enriched by these experiences, drives me to continually enhance the user experience in every project I undertake. I remain dedicated to
              staying current with industry trends, continuously expanding my knowledge and skill set in the ever-evolving field of technology. I
              invite you to explore my portfolio and connect with me.
            </P>
          </Column>

          <Column id="aboutme-column-b" align="center" gap="2rem" marginTop="4rem">
            <MyPhilosophy id="aboutme-my-philosophy">
              <Column marginTop="3rem" align="center">
                <Span>My Philosophy</Span>
                <Row id="aboutme-row" marginTop="5rem" align="center" justify="space-around" width="80vw">
                  <Tabs id="aboutme-tabs">
                    {tagName.map((tag, i) => (
                      <Tab key={i} open={open} setOpen={setOpen} index={i} width="100%" content={tagContent[i]} icon={icon[i]}>
                        {tag}
                      </Tab>
                    ))}
                  </Tabs>
                  <TagsAndImages id="tags-and-images">
                    {open === 0 ? <Img src="frontend.webp" id="accordin-image" /> : null}
                    {open === 1 ? <Img src="backend.webp" id="accordin-image" /> : null}
                    {open === 2 ? <Img src="database.webp" id="accordin-image" /> : null}
                    {open === 3 ? <Img src="aesthetics.webp" id="accordin-image" /> : null}
                    <TagsContainer id="tags-container">
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
        </div>
      </Section>
    </>
  );
}

export default Aboutme;
