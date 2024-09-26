import styled from "styled-components";
import Icon from "./Icon";
import CardTitle from "./CardTitle";
import Row from "./Row";
import P from "./TextContent";
import Column from "./Column";

const Card = styled.div`
  min-height: 18rem;
  width: 22vw;
  padding: 0.5rem 2rem;
  border-top: 0.001px solid var(--blue-0-5);
  border-bottom: 0.001px solid var(--blue-0-5);
  overflow: hidden;
  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
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

function SkillsCard({content: {category, title, description, top, left, scale, bgcolor}}) {
  return (
    <Card>
      <Column>
        <Row gap="2rem" align="center">
          <Round bgcolor={bgcolor}>
            <Icon category={category} position="absolute" top={top} left={left} scale={scale} />
          </Round>
          <CardTitle fontsize="2rem">{title}</CardTitle>
        </Row>
        <P fontsize="1.25rem" display="flex" alignitems="start" lineheight="2rem" margintop="1rem" align="justify">
          {description}
        </P>
      </Column>
    </Card>
  );
}

export default SkillsCard;
