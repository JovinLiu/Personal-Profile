import styled from "styled-components";
import TechTag from "./TechTag";

const Div = styled.div`
  height: 25vw; //14.4
  width: 23vw;
  transform: translateY(${({transform}) => transform});
  position: relative;
  z-index: 100;
`;

const Img = styled.img`
  width: 23vw;
  z-index: 100;
  /* aspect-ratio: 0.8; */
`;

const TextBox = styled.div`
  width: 23vw;
  height: 11vw;
  border-top: 0.001px solid var(--blue-0-5);
  color: var(--light-0-95);
  background-color: var(--light-0-03);
  backdrop-filter: blur(5px);
  position: absolute;
  bottom: 0;
  padding: 1vh 1vw 2vh 1vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  z-index: 100;
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
  line-height: 2.5vh;
  font-weight: 300;
  z-index: 300;
  transition: var(--transition-4);
`;

const Tech = styled.span`
  width: 18vw;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

function Card({index, content: {title, description, skills}}) {
  return (
    <Div>
      <Img src={`card${index}.jpg`} />
      <TextBox>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Tech>
          {skills?.map((skill, i) => (
            <TechTag key={i}>{skill}</TechTag>
          ))}
        </Tech>
      </TextBox>
    </Div>
  );
}

export default Card;
