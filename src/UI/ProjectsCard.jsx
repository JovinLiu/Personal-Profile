import styled from "styled-components";
import PropTypes from "prop-types";
import TechTag from "./TechTag";
import Column from "./Column";
import P from "./TextContent";
import CardTitle from "./CardTitle";
// import {useState} from "react";

const CardLink = styled.a`
  width: 23vw;
  height: ${({height}) => height}; // 14.4
  z-index: 101;
  position: relative;
  top: ${({top}) => top};
  perspective: 150rem;
  -moz-perspective: 150rem;
`;

const Card = styled.div`
  will-change: transform;
  width: 23vw;
  height: ${({height}) => height};
  transition: all 0.8s ease-out;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
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
`;

const TextBox = styled.div`
  width: 23vw;
  height: ${({height}) => height};
  border-top: 0.001px solid var(--blue-0-5);
  border-bottom: 0.001px solid var(--blue-0-5);
  color: var(--light-0-95);
  background-color: var(--light-0-03);
  backdrop-filter: blur(10px);
  padding: 1vh 1vw 1.5vh 1vw;
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
  return (
    <CardLink top={top} height="calc(14vw + 12rem)" href={href} aria-label={`View project: ${title}`}>
      <Card>
        <Front>
          <Column height="calc(14vw + 12rem)">
            <Img
              src={`card${index}.webp`}
              alt={title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/path/to/fallback/image.webp";
              }}
            />
            <TextBox height="12rem">
              <Column height="12rem">
                <CardTitle fontsize="2rem">{title}</CardTitle>
                <P fontsize="1.5rem" display="flex" alignitems="center">
                  {short}
                </P>
              </Column>
            </TextBox>
          </Column>
        </Front>
        <Back>
          <TextBox height="calc(14vw + 12rem)">
            <Column height="calc(14vw + 12rem - 2.5vh)" align="start" justify="space-between">
              <CardTitle fontsize="2rem">{title}</CardTitle>
              <P fontsize="1.5rem" display="flex" alignitems="center" align="justify">
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
      </Card>
    </CardLink>
  );
}

// 定义 PropTypes
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
