import styled from "styled-components";
import Icon from "./Icon";
import CardTitle from "./CardTitle";
import Row from "./Row";
import P from "../UI/TextContent";
import Column from "./Column";

const SkillCard = styled.div`
  height: 14vh;
  width: 22vw;
  padding: 0.5rem 2rem;
  background-color: rgba(255, 255, 255, 0.03);
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
  scale: 0.8;
`;

function Card({content: {category, title, description, top, left, scale, bgcolor}}) {
  return (
    <SkillCard>
      <Column>
        <Row gap="2rem" align="center">
          <Round bgcolor={bgcolor}>
            <Icon category={category} position="absolute" top={top} left={left} scale={scale} />
          </Round>
          <CardTitle fontsize="2rem">{title}</CardTitle>
        </Row>
        <P fontsize="1.25rem" display="flex" alignitems="start" lineheight="2rem" margintop="1rem">
          {description}
        </P>
      </Column>
    </SkillCard>
  );
}

export default Card;
