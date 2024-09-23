import styled from "styled-components";

const StyledTab = styled.div`
  width: 40rem;
  height: ${({height}) => height};
  border-bottom: 0.0001rem solid var(--light-0-2);
  transition: var(--transition-2);
  backdrop-filter: blur(${({blur}) => blur}px);
  background-color: var(${({bg}) => bg});
  color: var(--light-0-75);
`;

const TitleContainer = styled.span`
  margin-left: 3rem;
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  width: 30rem;
  gap: 2rem;
`;

const Title = styled.span`
  font-size: 1.75rem;
`;

const P = styled.p`
  margin-left: 3rem;
  margin-right: 3rem;
  font-size: 1.25rem;
`;

const Icon = styled.div`
  font-size: 2rem;
`;

function Tab({children, open, setOpen, index, content, icon}) {
  const height = open === index ? "12rem" : "6rem";
  const bg = open === index ? "--light-0-03" : "";
  const blur = open === index ? 1 : 0;

  function handleMouseOver() {
    setOpen(index);
  }

  return (
    <StyledTab height={height} bg={bg} blur={blur} onMouseOver={handleMouseOver}>
      <TitleContainer>
        <Icon>
          <ion-icon name={icon} />
        </Icon>
        <Title>{children}</Title>
      </TitleContainer>
      <P>{open === index && content}</P>
    </StyledTab>
  );
}

export default Tab;
