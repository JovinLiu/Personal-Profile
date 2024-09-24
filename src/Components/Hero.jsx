import styled, {keyframes} from "styled-components";
import Button from "../UI/Button";
import Icon from "../UI/Icon";
import {useEffect, useRef, useState} from "react";
import Link from "../UI/Link";
import Highlight from "../UI/Highlight";

const Section = styled.section`
  inset: 0;
  z-index: 150;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  color: white;
  z-index: 1;
  border-bottom: 0.0001rem solid var(--light-0-2);
  z-index: 200;
`;

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
  padding-top: 25vh;
  display: flex;
  flex-direction: column;
  line-height: 20vh;
  position: relative;
`;

const Span = styled.span`
  margin: 0 auto;
  font-family: "Biryani", sans-serif;
  font-size: ${({fontSize}) => fontSize};
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
  justify-content: end;
  margin-top: 12vh;
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
  const [position, setPosition] = useState({x: 25, y: 50});
  const windowWidth = useRef(null);
  const windowHeight = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      windowWidth.current = window.innerWidth;
      windowHeight.current = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleMouseOver(e) {
    const x = Math.floor((e.clientX / windowWidth.current) * 100);
    const y = Math.floor((e.clientY / windowHeight.current) * 100);
    setPosition({x, y});
  }

  return (
    <Section id="hero" onMouseMove={handleMouseOver}>
      <Highlight
        x={position.x}
        y={position.y}
        transition="all 7s cubic-bezier(.19,.93,.93,.6)"
        opacity="100%"
        colorA="--highlight-1"
        colorB="--blue"
        size="80vh"
        position="absolute"
      />
      <Highlight
        x={position.x}
        y={position.y}
        transition="all 17s cubic-bezier(.19,.93,.93,.6)"
        opacity="60%"
        colorA="--highlight-1"
        colorB="--blue"
        size="70vh"
        position="absolute"
      />
      <Highlight
        x={position.x}
        y={position.y}
        transition="all 30s cubic-bezier(.19,.93,.93,.6)"
        opacity="30%"
        colorA="--highlight-1"
        colorB="--blue"
        size="60vh"
        position="absolute"
      />
      <TitleContainer>
        <Span fontSize="5.2vw" fadeintime="5">
          Full Stack Web Developer
        </Span>
        <Span fontSize="12vw" fadeintime="4">
          Jovin Liu
        </Span>
      </TitleContainer>
      <ButtonContainer>
        <LinkContainer>
          <Link href="https://github.com/JovinLiu">
            <Icon icon="github" />
          </Link>
          <Link href="https://www.linkedin.com/in/jovin-liu-b173b0128/">
            <Icon icon="linkedin" />
          </Link>
        </LinkContainer>
        <Button icon="download-outline">Resume</Button>
        <Button icon="mail-outline">Contact Me</Button>
      </ButtonContainer>
    </Section>
  );
}

export default Hero;
