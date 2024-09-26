import Highlight from "../UI/Highlight";
import Section from "../UI/Section";
import Span from "../UI/TitleSpan";
import P from "../UI/TextContent";
import Column from "../UI/Column";
import Button from "../UI/Button";
import Row from "../UI/Row";
import {useState} from "react";
import useLazyLoad from "../Hooks/useLazyLoad";

function Contact() {
  const [show, setShow] = useState(false);
  const ref = useLazyLoad();

  function handleClickEmailMe() {
    window.location.href = "mailto:liujovin@gmail.com";
  }

  function handleClickPhoneNumber() {
    setShow(!show);
  }
  return (
    <Section id="contact" minheight="60rem">
      {" "}
      <Highlight
        x={10}
        y={10}
        opacity="80%"
        colorA="--turquoise-0-75"
        colorB="--red"
        size="100vh"
        transition="var(--transition-4)"
        event="none"
        position="absolute"
      />
      <Column align="center" gap="3rem" height="50rem" margintop="5rem" ref={ref}>
        <Span>Contact</Span>
        <P width="70vw" align="center" fontsize="1.75rem" lineheight="4rem">
          {`Thank you for taking the time to view my portfolio. As a web developer passionate about innovation and growth, I’m always eager to take on new challenges and collaborate with teams to achieve impactful results. Every project helps refine my skills and drives my enthusiasm for this field even further.`}
          <br />
          <br />
          {`If you'd like to connect, discuss opportunities, or simply chat about web development, feel free to reach out via LinkedIn, phone call, or email. I look forward to connecting and exploring how we can create something great together.`}
        </P>
        <Row margintop="5rem" gap="10vw">
          <Button padding="0 2rem 0 2rem" onClick={handleClickPhoneNumber}>
            {show ? "0413 685 018" : "Mobile Number"}
          </Button>
          <Button padding="0 2rem 0 2rem" onClick={handleClickEmailMe}>
            Email Me
          </Button>
        </Row>
      </Column>
    </Section>
  );
}

export default Contact;
