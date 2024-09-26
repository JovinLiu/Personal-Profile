import styled from "styled-components";
import Column from "./Column";
import P from "./TextContent";

const StyledTab = styled.div`
  width: 25vw;
  height: ${({height}) => height};
  border-bottom: 0.0001rem solid var(--blue-0-5);
  transition: var(--transition-2);
  backdrop-filter: blur(${({blur}) => blur}px);
  background-color: var(${({bg}) => bg});
  color: var(--light-0-75);
`;

const TitleContainer = styled.span`
  margin-left: 10%;
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  width: 30rem;
  gap: 2rem;
  color: var(${({color}) => color});
  filter: brightness(1.2);
`;

const Title = styled.span`
  font-size: 2.25rem;
  font-weight: ${({weight}) => weight};
  white-space: nowrap;
  text-align: left;
`;

const Icon = styled.div`
  font-size: 2rem;
`;

function Tab({children, open, setOpen, index, content, icon}) {
  const height = open === index ? "24rem" : "7rem";
  const bg = open === index ? "--light-0-03" : "";
  const blur = open === index ? 5 : 0;
  const color = open === index ? "--orange-0-5" : "--light-0-75";
  const weight = open === index ? 900 : 300;

  function handleMouseOver() {
    setOpen(index);
  }

  return (
    <StyledTab height={height} bg={bg} blur={blur} onMouseOver={handleMouseOver}>
      <Column gap="2rem">
        <TitleContainer color={color}>
          <Icon>
            <ion-icon name={icon} />
          </Icon>
          <Title weight={weight}>{children}</Title>
        </TitleContainer>
        <P align="justify" marginleft="10%" marginright="10%" fontsize="1.5rem" lineheight="3.5rem" width="80%">
          {open === index && content}
        </P>
      </Column>
    </StyledTab>
  );
}

export default Tab;
