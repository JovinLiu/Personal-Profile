import styled from "styled-components";
import PropTypes from "prop-types";
import TechTag from "./TechTag";
import Column from "./Column";
import P from "./TextContent";
import CardTitle from "./CardTitle";
import {useEffect, useState} from "react";
import useWindowWith from "./../Hooks/useWindowWidth";

const CardLink = styled.a`
  width: 23vw;
  height: ${({height}) => height}; // 14.4 // 1.6428
  z-index: 101;
  position: relative;
  top: ${({top}) => top};
  perspective: 150rem;
  -moz-perspective: 150rem;

  @media (max-width: 800px) {
    top: 0;
    width: 80vw;
    height: calc(48.7vw + 20rem);
  }

  @media (max-width: 530px) {
    width: 85vw;
    height: calc(48.7vw + 22.5rem);
  }
`;

const Card = styled.div`
  will-change: transform;
  width: 23vw;
  height: ${({height}) => height};
  transition: all 1.2s ease-out;
  transform-style: preserve-3d;
  transform: ${({transform}) => transform};

  @media (max-width: 800px) {
    width: 80vw;
    height: calc(48.7vw + 20rem);
  }

  @media (max-width: 530px) {
    width: 85vw;
    height: calc(48.7vw + 22.5rem);
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

const Img = styled.img`
  width: 23vw; // 1.65:1
  height: auto;
  z-index: 1;

  @media (max-width: 800px) {
    width: 80vw;
    height: calc(48.7vw + 20rem);
  }

  @media (max-width: 530px) {
    width: 85vw;
    height: calc(48.7vw + 22.5rem);
  }
`;

const TextBox = styled.div`
  width: 23vw;
  height: ${({height}) => height};
  border-top: 0.001px solid var(--blue-0-5);
  border-bottom: 0.001px solid var(--blue-0-5);
  color: var(--light-0-95);
  background-color: var(--light-0-03);
  backdrop-filter: blur(10px);
  padding: 1rem 1vw 1.5rem 1vw;
  z-index: 130;
  overflow: hidden;

  @media (max-width: 800px) {
    width: 80vw;
    height: calc(48.7vw + 20rem);
  }

  @media (max-width: 530px) {
    width: 85vw;
    height: calc(48.7vw + 22.5rem);
  }
`;

const Tech = styled.span`
  width: 18vw;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 800px) {
    width: 80vw;
    gap: 1rem;
  }

  @media (max-width: 530px) {
    width: 85vw;
    height: calc(48.7vw + 22.5rem);
  }
`;

function ProjectsCard({index, content: {title, short, description, skills, top, href}}) {
  const [hover, setHover] = useState(false);
  const width = useWindowWith();
  const showBack = width > 800;
  const transform = hover && showBack ? "rotateY(180deg)" : "null";

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <CardLink
      top={top}
      height="calc(14vw + 12rem)"
      href={href}
      target="_blank"
      aria-label={`View project: ${title}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card transform={transform} height="calc(14vw + 12rem)">
        <Front>
          <Column
            height="calc(14vw + 12rem)"
            heightProjectCard800="calc(48.7vw + 20rem)"
            heightProjectCard530="calc(48.7vw + 22.5rem)"
            justify="space-between"
          >
            <Img
              src={`card${index}.webp`}
              alt={title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/path/to/fallback/image.webp";
              }}
            />
            <TextBox height="12rem">
              <Column height="12rem" heightProjectCard800="18rem" heightProjectCard530="0rem">
                <CardTitle fontsize="2rem">{title}</CardTitle>
                <P fontSize="1.25rem" display="flex" alignItems="center" height="10rem" color="var(--light-0-75)">
                  {showBack ? short : description}
                </P>
                {showBack ? null : (
                  <Tech>
                    {skills?.map((skill, i) => (
                      <TechTag key={i}>{skill}</TechTag>
                    ))}
                  </Tech>
                )}
              </Column>
            </TextBox>
          </Column>
        </Front>
        {showBack ? (
          <Back>
            <TextBox height="calc(14vw + 12rem)">
              <Column height="calc(14vw + 12rem - 2.5rem)" align="start" justify="space-between">
                <CardTitle fontsize="2rem">{title}</CardTitle>
                <P fontSize="1.25rem" display="flex" alignItems="center" align="justify" lineHeight="2rem" color="var(--light-0-75)">
                  {description}
                </P>
                <Tech>
                  {skills?.map((skill, i) => (
                    <TechTag key={i}>{skill}</TechTag>
                  ))}
                </Tech>
              </Column>
            </TextBox>
          </Back>
        ) : null}
      </Card>
    </CardLink>
  );
}

ProjectsCard.propTypes = {
  index: PropTypes.number.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    top: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectsCard;
