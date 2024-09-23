import styled from "styled-components";
import Button from "../UI/Button";
import Icon from "../UI/Icon";
import {useEffect, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";

const Section = styled.section`
  inset: 0;
  z-index: 9999;
  height: 100vh;
  width: 90vw;
  margin: 0 auto;
  color: white;
  z-index: 1;
`;

const TitleContainer = styled.div`
  margin: 0 auto;
  width: 85vw;
  padding-top: 23vh;
  display: flex;
  flex-direction: column;
  line-height: 18rem;
  position: relative;
`;

const Span = styled.span`
  font-family: "Biryani", sans-serif;
  font-size: ${({fontSize}) => fontSize};
  z-index: 9999;
  font-weight: 300;
  word-wrap: break-word;
  mix-blend-mode: overlay;
  filter: brightness(2);
`;

const Link = styled.a`
  cursor: pointer;
  display: block;
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  fill: var(--light-0-95);
  mix-blend-mode: overlay;
  transition: var(--transition-1);
  z-index: 9999;
  &:hover {
    mix-blend-mode: normal;
  }
`;

const ButtonContainer = styled.div`
  height: 5rem;
  display: flex;
  justify-content: end;
  margin-right: 10rem;
  margin-top: 10rem;
  gap: 8rem;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-left: 3vw;
  margin-right: auto;
  gap: 5rem;
  align-items: center;
`;

const Highlight = styled.div`
  will-change: transform;
  transform: translate(-50%, -50%) translate3d(${({x}) => x}vw, ${({y}) => y}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
  filter: blur(55px);
  z-index: 5;
  width: 90vh;
  height: 90vh;
  opacity: ${({opacity}) => opacity};
  background-image: radial-gradient(circle farthest-side at 20% 20%, var(--highlight-1), var(--blue)),
    radial-gradient(circle closest-corner at 60% 70%, var(--blue), var(--purple-0));
  filter: blur(35px);
  border-radius: 1000px;
  position: absolute;
  transition: ${({transition}) => transition};
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = Math.floor((e.clientX / windowWidth.current) * 100);
      const y = Math.floor((e.clientY / windowHeight.current) * 100);
      setPosition({x, y});
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Section id="hero">
      <Highlight x={position.x} y={position.y} transition="all 7s cubic-bezier(.19,.93,.93,.6)" opacity="100%" />
      <Highlight x={position.x} y={position.y} transition="all 17s cubic-bezier(.19,.93,.93,.6)" opacity="60%" />
      <TitleContainer>
        <Span fontSize="9rem">Hi, I am</Span>
        <Span fontSize="15rem">Jovin Liu</Span>
        <Span fontSize="9rem">Full Stack Web Developer</Span>
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
        <Button>Resume</Button>
        <Button>Contact</Button>
      </ButtonContainer>
    </Section>
  );
}

export default Hero;
