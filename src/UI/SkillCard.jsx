import styled from "styled-components";
import Icon from "./Icon";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 13vh;
  width: 22vw;
  gap: 2rem;
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

const Round = styled.div`
  position: relative;
  background-color: ${({bgcolor}) => bgcolor};
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  z-index: 1;
  background-image: url("grain.webp");
  mix-blend-mode: overlay;
`;

function Card({content: {category, title, description, top, left, scale, bgcolor}}) {
  return (
    <SkillCard>
      <Row>
        <Round bgcolor={bgcolor}>
          <Icon category={category} position="absolute" top={top} left={left} scale={scale} />
        </Round>
        <Title>{title}</Title>
      </Row>
      <Description>{description}</Description>
    </SkillCard>
  );
}

export default Card;
