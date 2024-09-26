import styled from "styled-components";

const P = styled.p`
  z-index: 300;
  height: 10vh;
  font-weight: 300;
  color: var(--light-0-75);
  margin-top: ${({margintop}) => margintop};
  margin-left: ${({marginleft}) => marginleft};
  margin-right: ${({marginright}) => marginright};
  font-size: ${({fontsize}) => fontsize};
  line-height: ${({lineheight}) => lineheight};
  width: ${({width}) => width};
  text-align: ${({align}) => align};
  grid-column: ${({column}) => column};
  //用于快速上下居中字体
  display: ${({display}) => display};
  align-items: ${({alignitems}) => alignitems};
`;

function TextContent({
  children,
  width,
  align,
  column,
  margintop,
  fontsize,
  lineheight,
  display,
  alignitems,
  gridcolumn,
  gridrow,
  marginleft,
  marginright
}) {
  return (
    <P
      width={width}
      align={align}
      column={column}
      margintop={margintop}
      fontsize={fontsize}
      lineheight={lineheight}
      display={display}
      alignitems={alignitems}
      gridrow={gridrow}
      gridcolumn={gridcolumn}
      marginleft={marginleft}
      marginright={marginright}
    >
      {children}
    </P>
  );
}

export default TextContent;
