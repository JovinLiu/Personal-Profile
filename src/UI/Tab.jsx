import styled from "styled-components";

const StyledTab = styled.div`
  width: 40rem;
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
  align-items: center;
  width: 30rem;
  gap: 2rem;
  color: var(${({color}) => color});
  filter: brightness(1.2);
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: ${({weight}) => weight};
`;

const P = styled.p`
  margin-left: 10%;
  margin-top: 5%;
  font-size: 1.5rem;
  line-height: 3.5vh;
  width: 80%;
  font-weight: 300;
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
      <TitleContainer color={color}>
        <Icon>
          <ion-icon name={icon} />
        </Icon>
        <Title weight={weight}>{children}</Title>
      </TitleContainer>
      <P>{open === index && content}</P>
    </StyledTab>
  );
}

export default Tab;
