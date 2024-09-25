import styled from "styled-components";

const StyledDiv = styled.div`
  z-index: 1;
  will-change: transform;
  transform: translate(-50%, -50%) translate3d(${({x}) => x}vw, ${({y}) => y}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
  filter: blur(55px);
  width: ${({size}) => size};
  height: ${({size}) => size};
  opacity: ${({opacity}) => opacity};
  background-image: radial-gradient(circle farthest-side at 20% 20%, var(${({colorA}) => colorA}), var(${({colorB}) => colorB})),
    radial-gradient(circle closest-corner at 60% 70%, var(--blue), var(--purple-0));
  filter: blur(35px);
  border-radius: 1000px;
  position: ${({position}) => position};
  transition: ${({transition}) => transition};
  pointer-events: ${({event}) => event};
`;

function Highlight({x, y, transition, opacity, colorA, colorB, size, event, position}) {
  return (
    <StyledDiv x={x} y={y} transition={transition} opacity={opacity} colorA={colorA} colorB={colorB} size={size} event={event} position={position} />
  );
}

export default Highlight;
