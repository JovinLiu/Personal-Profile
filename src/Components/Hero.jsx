//Library
import styled, {keyframes} from "styled-components";
import useMouseTrack from "../Hooks/useMouseTrack";
//Components
import Button from "../UI/Button";
import Icon from "../UI/Icon";
import Link from "../UI/Link";
import Highlight from "../UI/Highlight";
import Section from "../UI/Section";
//Style
const fadeIn = keyframes`
  from {
    opacity: 0;
    mix-blend-mode: overlay;
    z-index: 99;
    transform: translate3D(0, 50%,0);
  }
  to {
    opacity: 1;
    mix-blend-mode: overlay;
    z-index: 99;
    transform: translate3D(0, 0 ,0);
  }
`;

const TitleContainer = styled.div`
  margin: 0 auto;
  width: 80vw;
  padding-top: 25rem;
  display: flex;
  flex-direction: column;
  line-height: 20rem;
  position: relative;
  user-select: none;
`;

const TitleSpan = styled.span`
  margin: 0 auto;
  font-family: "Biryani", sans-serif;
  font-size: ${({fontSize}) => fontSize};
  color: var(--light);
  z-index: 99;
  font-weight: 300;
  word-wrap: break-word;
  mix-blend-mode: overlay;
  filter: brightness(2);
  animation-name: ${fadeIn};
  animation-duration: ${({fadeintime}) => fadeintime}s;
  animation-iteration-count: 1;
  width: 80vw;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 75vw;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 15rem;
  gap: 8rem;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-right: auto;
  gap: 5rem;
  align-items: center;
`;

function Hero() {
  const {handleMouseOver, position} = useMouseTrack();

  function handleClick(e) {
    e.preventDefault();
    const section = document.getElementById("contact");
    section.scrollIntoView({behavior: "smooth"});
  }

  return (
    <Section id="home" minHeight="100rem" position="normal" onMouseMove={handleMouseOver}>
      <Highlight
        x={position.x}
        y={position.y}
        transition="all 7s cubic-bezier(.19,.93,.93,.6)"
        opacity="100%"
        primary="--highlight-1"
        secondary="--blue"
        size="80vh"
        position="absolute"
      />
      <Highlight
        x={position.x}
        y={position.y}
        transition="all 17s cubic-bezier(.19,.93,.93,.6)"
        opacity="60%"
        primary="--highlight-1"
        secondary="--blue"
        size="70vh"
        position="absolute"
      />
      <Highlight
        x={position.x}
        y={position.y}
        transition="all 30s cubic-bezier(.19,.93,.93,.6)"
        opacity="30%"
        primary="--highlight-1"
        secondary="--blue"
        size="60vh"
        position="absolute"
      />
      <TitleContainer id="hero-title-container">
        <TitleSpan id="hero-title-span-a" fontSize="5.2vw" fadeintime="5">
          Full Stack Web Developer
        </TitleSpan>
        <TitleSpan id="hero-title-span-b" fontSize="12vw" fadeintime="4">
          Jovin Liu
        </TitleSpan>
      </TitleContainer>
      <ButtonContainer id="hero-button-container">
        <LinkContainer id="hero-link-container">
          <Link href="https://github.com/JovinLiu" border="0.001px solid var(--blue-0-5)" backdrop="blur(5px)">
            <Icon icon="github" />
          </Link>
          <Link href="https://www.linkedin.com/in/jovin-liu-b173b0128/" border="0.001px solid var(--blue-0-5)" backdrop="blur(5px)">
            <Icon icon="linkedin" />
          </Link>
        </LinkContainer>
        <Button padding="0 2vw 0 1vw" icon="download-outline">
          Resume
        </Button>
        <Button padding="0 2vw 0 1vw" icon="mail-outline" onClick={handleClick}>
          Contact
        </Button>
      </ButtonContainer>
    </Section>
  );
}

export default Hero;
