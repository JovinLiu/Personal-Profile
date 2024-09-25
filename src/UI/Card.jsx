import styled from "styled-components";
import TechTag from "./TechTag";
import Column from "./Column";
import P from "./TextContent";
import CardTitle from "./CardTitle";

const CardLink = styled.a`
  width: 23vw;
  height: 45.4vh; //14.4
  position: relative;
  z-index: 100;
  top: ${({top}) => top};
  transition: var(--transition-2);
  border-top: 0.001px solid var(--blue-0-5);
  border-bottom: 0.001px solid var(--blue-0-5);
  overflow: hidden;
  filter: opacity(0.6);
  &:hover {
    filter: none;
    scale: 1.05;
  }
`;

const Mask = styled.div`
  position: absolute;
  width: 23vw;
  height: calc(23vw * 9.73 / 16);
  z-index: 2;
`;

const Img = styled.img`
  width: 23vw; //1.65:1
  height: auto;
  z-index: 1;
  position: absolute;
`;

const TextBox = styled.div`
  width: 23vw;
  height: calc(45.4vh - 14vw);
  border-top: 0.001px solid var(--blue-0-5);
  color: var(--light-0-95);
  background-color: var(--light-0-03);
  backdrop-filter: blur(10px);
  position: absolute;
  bottom: 0;
  padding: 1vh 1vw 1.5vh 1vw;
  z-index: 100;
`;

const Tech = styled.span`
  width: 18vw;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

function Card({index, content: {title, description, skills, top, href}}) {
  return (
    <CardLink top={top} href={href}>
      <Mask />
      <Img src={`card${index}.webp`} />
      <TextBox>
        <Column height="calc(45.4vh - 2.5vh - 14.375vw);" align="start" justify="space-between">
          <CardTitle fontsize="2rem">{title}</CardTitle>
          <P fontsize="1.25rem" display="flex" alignitems="center">
            {description}
          </P>
          <Tech>
            {skills?.map((skill, i) => (
              <TechTag key={i}>{skill}</TechTag>
            ))}
          </Tech>
        </Column>
      </TextBox>
    </CardLink>
  );
}

export default Card;
