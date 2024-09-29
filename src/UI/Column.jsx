import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({align}) => align};
  justify-content: ${({justify}) => justify};
  margin-top: ${({marginTop}) => marginTop};
  height: ${({height}) => height};
  gap: ${({gap}) => gap};
`;

function Column({children, align, height, gap, marginTop, justify}) {
  return (
    <Div align={align} justify={justify} height={height} gap={gap} marginTop={marginTop}>
      {children}
    </Div>
  );
}

export default Column;
