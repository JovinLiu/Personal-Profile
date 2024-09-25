import styled from "styled-components";
import TechTag from "./TechTag";

const CardLink = styled.a`
  width: 23vw;
  height: 45.4vh; //14.4
  position: relative;
  z-index: 100;
  top: ${({top}) => top};
  transition: var(--transition-2);
  border-top: 0.001px solid var(--blue-0-5);
  border-bottom: 0.001px solid var(--blue-0-5);
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
  width: 23vw;
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
  padding: 0.5vh 1vw 1.5vh 1vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  z-index: 100;
  mix-blend-mode: overlay;
`;

const Title = styled.span`
  font-size: 2vh;
  font-weight: 500;
  color: var(--orange);
`;
const Description = styled.p`
  margin: 0 auto;
  font-size: 1.25vh;
  color: var(--light-0-75);
  text-align: left;
  line-height: 2vh;
  font-weight: 300;
  z-index: 300;
  transition: var(--transition-4);
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
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Tech>
          {skills?.map((skill, i) => (
            <TechTag key={i}>{skill}</TechTag>
          ))}
        </Tech>
      </TextBox>
    </CardLink>
  );
}

export default Card;
