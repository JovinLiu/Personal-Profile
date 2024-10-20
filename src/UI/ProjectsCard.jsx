import styled from "styled-components";
import PropTypes from "prop-types";
import TechTag from "./TechTag";
import Column from "./Column";
import P from "./TextContent";
import CardTitle from "./CardTitle";
import {useState} from "react";
import useWindowWith from "./../Hooks/useWindowWidth";

const CardLink = styled.a`
  width: 23vw;
  height: ${({height}) => height || "auto"}; // 14.4 // 1.6428
  z-index: 101;
  position: relative;
  top: ${({top}) => top};
  perspective: 150rem;
  -webkit-perspective: 150rem;
  -moz-perspective: 150rem;
`;

const Card = styled.div`
  will-change: transform;
  width: 23vw;
  height: ${({height}) => height};
  transition: all 1.2s ease-out;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform: ${({transform}) => transform};
  -webkit-transform: ${({transform}) => transform};
  -moz-transform: ${({transform}) => transform};
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  z-index: 99;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  z-index: 100;
`;

const Img = styled.img`
  width: 23vw; // 1.65:1
  height: auto;
  z-index: 1;
`;

const TextBox = styled.div`
  width: 23vw;
  height: ${({height}) => height};
  border-top: 0.001px solid var(--blue-0-5);
  border-bottom: 0.001px solid var(--blue-0-5);
  color: var(--light-0-95);
  background-color: var(--light-0-03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  padding: 1rem 1vw 1.5rem 1vw;
  z-index: 130;
  overflow: hidden;
`;

const Tech = styled.span`
  width: 18vw;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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
      id="project-card-link"
      top={top}
      height="calc(14vw + 12rem)"
      href={href}
      target="_blank"
      aria-label={`View project: ${title}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card id="project-card" transform={transform} height="calc(14vw + 12rem)">
        <Front>
          <Column id="project-card-column-a" height="calc(14vw + 12rem)" justify="space-between">
            <Img
              id="project-card-img"
              src={`card${index}.webp`}
              alt={title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/path/to/fallback/image.webp";
              }}
            />
            <TextBox id="project-text-box" height="12rem">
              <Column id="project-card-column-b" height="12rem" justify="space-between">
                <CardTitle fontsize="2rem">{title}</CardTitle>
                <P fontSize="1.25rem" display="flex" alignItems="center" height="10rem" color="var(--light-0-75)">
                  {showBack ? short : description}
                </P>
                {showBack ? null : (
                  <Tech id="project-tech">
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
