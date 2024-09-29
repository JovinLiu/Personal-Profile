import styled from "styled-components";

const P = styled.p`
  z-index: 300;
  font-weight: 300;
  color: ${({color}) => color};
  height: ${({height}) => height};
  margin-top: ${({marginTop}) => marginTop};
  margin-left: ${({marginLeft}) => marginLeft};
  margin-right: ${({marginRight}) => marginRight};
  font-size: ${({fontSize}) => fontSize};
  line-height: ${({lineHeight}) => lineHeight};
  width: ${({width}) => width};
  text-align: ${({align}) => align};
  grid-column: ${({column}) => column};
  //用于快速上下居中字体
  display: ${({display}) => display};
  align-items: ${({alignItems}) => alignItems};
  transition: var(--transition-2);

  &:hover {
    color: ${({textColorHover}) => textColorHover};
  }
`;

function TextContent({
  id,
  children,
  width,
  align,
  column,
  marginTop,
  fontSize,
  lineHeight,
  display,
  alignItems,
  marginLeft,
  marginRight,
  height,
  color,
  textColorHover
}) {
  return (
    <P
      id={id}
      width={width}
      align={align}
      column={column}
      marginTop={marginTop}
      fontSize={fontSize}
      lineHeight={lineHeight}
      display={display}
      alignItems={alignItems}
      marginLeft={marginLeft}
      marginRight={marginRight}
      height={height}
      color={color}
      textColorHover={textColorHover}
    >
      {children}
    </P>
  );
}

export default TextContent;
