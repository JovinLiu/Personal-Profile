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

  @media (max-width: 1200px) {
    width: 25vw;
  }

  @media (max-width: 1100px) {
    width: 26vw;
    padding: 0.5rem;
  }

  @media (max-width: 1000px) {
    width: 27vw;
    padding: 0rem;
  }

  @media (max-width: 800px) {
    width: 60vw;
    padding: 0.5rem 2rem;
  }

  @media (max-width: 800px) {
    width: 75vw;
    padding: 0.5rem 2rem;
  }
`;

const Round = styled.div`
  position: relative;
  background-color: ${({bgcolor}) => bgcolor};
  clip-path: circle();
  width: 5.5rem !important;
  height: 5.5rem !important;
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
        <P
          fontSize="1.25rem"
          display="flex"
          alignItems="start"
          lineHeight="2rem"
          marginTop="1rem"
          align="justify"
          color="var(--light-0-5)"
          textColorHover="var(--light)"
        >
          {description}
        </P>
      </Column>
    </Card>
  );
}

export default SkillsCard;
