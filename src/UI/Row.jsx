import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: ${({width}) => width};
  align-items: ${({align}) => align};
  justify-content: ${({justify}) => justify};
  margin-top: ${({margintop}) => margintop};
  height: ${({height}) => height};
  gap: ${({gap}) => gap};

  @media (max-width: 950px) {
    gap: 2rem;
  }

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

function Row({children, align, height, gap, margintop, justify, width}) {
  return (
    <Div align={align} justify={justify} height={height} width={width} gap={gap} margintop={margintop}>
      {children}
    </Div>
  );
}

export default Row;
