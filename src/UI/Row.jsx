import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({align}) => align};
  justify-content: ${({justify}) => justify};
  margin-top: ${({margintop}) => margintop};
  height: ${({height}) => height};
  gap: ${({gap}) => gap};
`;

function Row({children, align, height, gap, margintop, justify}) {
  return (
    <Div align={align} justify={justify} height={height} gap={gap} margintop={margintop}>
      {children}
    </Div>
  );
}

export default Row;
