import styled from "styled-components";

const Span = styled.span`
  font-size: ${({fontsize}) => fontsize};
  font-weight: 500;
  color: var(--indigo);
`;

function ItemTitle({children, fontsize}) {
  return <Span fontsize={fontsize}>{children}</Span>;
}

export default ItemTitle;
