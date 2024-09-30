//Library
import {useState} from "react";
import useLazyLoad from "../Hooks/useLazyLoad";
//Components
import Highlight from "../UI/Highlight";
import Section from "../UI/Section";
import Span from "../UI/TitleSpan";
import P from "../UI/TextContent";
import Column from "../UI/Column";
import Button from "../UI/Button";
import Row from "../UI/Row";

function Contact() {
  const [show, setShow] = useState(false);
  const ref = useLazyLoad();

  function handleClickEmailMe() {
    window.location.href = "mailto:liujovin@gmail.com";
    setShow(true);
  }

  return (
    <Section id="contact" minHeight="60rem">
      <Highlight
        x={10}
        y={-10}
        opacity="80%"
        primary="--turquoise-0-75"
        secondary="--red"
        size="70vw"
        transition="var(--transition-4)"
        event="none"
        position="absolute"
      />
      <div ref={ref}>
        <Column id="contact-column" align="center" gap="3rem" height="50rem" marginTop="15rem">
          <Span>Contact</Span>
          <P id="contact-text-box" width="70vw" align="center" fontSize="1.75rem" lineHeight="4rem" color="var(--light-0-75)">
            {`Thank you for taking the time to view my portfolio. As a web developer passionate about innovation and growth, I’m always eager to take on new challenges and collaborate with teams to achieve impactful results. Every project helps refine my skills and drives my enthusiasm for this field even further.`}
            <br />
            <br />
            {`If you'd like to connect, discuss opportunities, or simply chat about web development, feel free to reach out via LinkedIn, phone call, or email. I look forward to connecting and exploring how we can create something great together.`}
          </P>
          <Row marginTop="1rem" gap="6vw">
            <Button padding="0 4rem 0 4rem" onClick={handleClickEmailMe}>
              {show ? "liujovin@gmail.com" : "Email Me"}
            </Button>
          </Row>
        </Column>
      </div>
    </Section>
  );
}

export default Contact;
