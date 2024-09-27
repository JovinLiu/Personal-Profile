import styled from "styled-components";

const P = styled.p`
  z-index: 300;
  font-weight: 300;
  color: var(--light-0-75);
  height: ${({height}) => height};
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
  marginright,
  height
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
      height={height}
    >
      {children}
    </P>
  );
}

export default TextContent;
