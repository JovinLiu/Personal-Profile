import styled from "styled-components";
import SkillsCard from "./../UI/SkillsCard";
import {useEffect, useRef} from "react";
import Section from "./../UI/Section";
import P from "./../UI/TextContent";
import GridPosition from "../UI/GridPosition";
import Column from "../UI/Column";
import skillArr from "../Data/skills";

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
  row-gap: 4rem;
`;

function Skills() {
  const ref = useRef(null);

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
    <Section id="skills" height="180vh">
      <SkillsContainer ref={ref}>
        {skillArr.map((skill, i) => (
          <SkillsCard content={skill} key={i} />
        ))}
        <GridPosition column="-2 / -1" row="1 / 4">
          <Column align="end" gap="10rem">
            <Span>Web Tech Stack</Span>
            <P width="23vw" align="right" fontsize="1.75rem" lineheight="4rem">
              This web development toolkit, which I have mastered, empowers me to build dynamic and efficient web applications that encompass
              everything from user experience to database management. This diverse skill set is what fuels my journey in web development.
            </P>
          </Column>
        </GridPosition>
        <GridPosition column="1 / 2" row="9 / 10">
          <P width="22vw" align="left" fontsize="1.75rem" lineheight="4rem" margintop="1rem">
            Through my unwavering dedication, I am broadening my skill set and working towards mastering new programming languages.
          </P>
        </GridPosition>
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
