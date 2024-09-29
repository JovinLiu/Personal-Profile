import styled from "styled-components";

const Div = styled.div`
  //用于将字体定位在网格的某一个位置中
  grid-column: ${({column}) => column};
  grid-row: ${({row}) => row};

  @media (max-width: 800px) {
    grid-column: none;
    grid-row: none;
  }
`;

function GridPosition({children, column, row}) {
  return (
    <Div column={column} row={row}>
      {children}
    </Div>
  );
}

export default GridPosition;
