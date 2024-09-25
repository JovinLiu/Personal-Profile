import styled from "styled-components";
import Highlight from "../UI/Highlight";

const Section = styled.section`
  height: 50vh;
  width: 100vw;
  position: relative;
  box-shadow:
    -0.5px 0 0 var(--light-0-95),
    0.5px 0 0 var(--light-0-95);
  border-bottom: 0.0001rem solid var(--light-0-2);
  z-index: 150;
`;

function Contact() {
  return (
    <Section id="contact">
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
    </Section>
  );
}

export default Contact;
