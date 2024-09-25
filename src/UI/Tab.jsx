import styled from "styled-components";
import Column from "./Column";

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
  padding-top: 5%;
  display: flex;
  align-items: base;
  width: 30rem;
  gap: 2rem;
  color: var(${({color}) => color});
  filter: brightness(1.2);
`;

const Title = styled.span`
  font-size: 1.25vw;
  font-weight: ${({weight}) => weight};
  white-space: nowrap;
  text-align: left;
`;

const P = styled.p`
  margin-left: 10%;
  margin-right: 10%;
  font-size: 1.5rem;
  line-height: 3.5rem;
  width: 80%;
  font-weight: 300;
  text-align: left;
`;

const Icon = styled.div`
  font-size: 2rem;
`;

function Tab({children, open, setOpen, index, content, icon}) {
  const height = open === index ? "24vh" : "7vh";
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
        <P>{open === index && content}</P>
      </Column>
    </StyledTab>
  );
}

export default Tab;
