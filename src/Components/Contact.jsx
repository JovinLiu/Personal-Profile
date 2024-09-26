import Highlight from "../UI/Highlight";
import Section from "../UI/Section";
import Span from "../UI/TitleSpan";
import P from "../UI/TextContent";
import Column from "../UI/Column";
import Button from "../UI/Button";
import Row from "../UI/Row";
import {useEffect} from "react";
import useLazyLoad from "../Hooks/useLazyLoad";

function Contact() {
  const ref = useLazyLoad();
  console.log(ref.current);

  useEffect(function () {
    if (!ref?.current?.childNodes) return;

    console.log(ref.current);

    const revealCard = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("move-up-fade-in");
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      });
    };

    const options = {root: null, thresholds: 0.1, rootMargin: "-100px"};

    const cardObserver = new IntersectionObserver(revealCard, options);

    ref?.current?.childNodes.forEach((el) => {
      el.style.opacity = 0;
      cardObserver.observe(card);
    });

    return () => {
      if (cardObserver) cardObserver.disconnect();
    };
  }, []);

  function handleClickEmailMe() {
    window.location.href = "mailto:liujovin@gmail.com";
  }

  return (
    <Section id="contact" minheight="60rem" ref={ref}>
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
      <Column align="center" gap="3rem" height="50rem" margintop="15rem">
        <Span>Contact</Span>
        <P width="70vw" align="center" fontsize="1.75rem" lineheight="4rem">
          {`Thank you for taking the time to view my portfolio. As a web developer passionate about innovation and growth, I’m always eager to take on new challenges and collaborate with teams to achieve impactful results. Every project helps refine my skills and drives my enthusiasm for this field even further.`}
          <br />
          <br />
          {`If you'd like to connect, discuss opportunities, or simply chat about web development, feel free to reach out via LinkedIn, phone call, or email. I look forward to connecting and exploring how we can create something great together.`}
        </P>
        <Row margintop="5rem" gap="6vw">
          <Button padding="0 4rem 0 4rem" onClick={handleClickEmailMe}>
            Email Me
          </Button>
        </Row>
      </Column>
    </Section>
  );
}

export default Contact;
