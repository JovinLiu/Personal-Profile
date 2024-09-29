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

  @media (max-width: 1050px) {
    width: ${({widthAboutMe1050}) => widthAboutMe1050};
    margin-top: ${({marginTopProjects1050}) => marginTopProjects1050};
  }

  @media (max-width: 1050px) {
    margin-top: ${({marginTopSkills1050}) => marginTopSkills1050};
  }

  @media (max-width: 800px) {
    width: ${({widthProjects800}) => widthProjects800};
    text-align: ${({alignProjects800}) => alignProjects800};
  }

  @media (max-width: 800px) {
    width: ${({widthSkills800}) => widthSkills800};
    text-align: ${({alignSkills800}) => alignSkills800};
  }

  @media (max-width: 800px) {
    width: ${({widthContact800}) => widthContact800};
  }
`;

function TextContent({
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
  textColorHover,
  widthAboutMe1050,
  marginTopProjects1050,
  marginTopSkills1050,
  widthProjects800,
  alignProjects800,
  widthSkills800,
  alignSkills800,
  widthContact800
}) {
  return (
    <P
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
      widthAboutMe1050={widthAboutMe1050}
      marginTopProjects1050={marginTopProjects1050}
      marginTopSkills1050={marginTopSkills1050}
      widthProjects800={widthProjects800}
      alignProjects800={alignProjects800}
      widthSkills800={widthSkills800}
      alignSkills800={alignSkills800}
      widthContact800={widthContact800}
    >
      {children}
    </P>
  );
}

export default TextContent;
