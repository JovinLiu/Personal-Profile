import Highlight from "../UI/Highlight";
import Section from "../UI/Section";

function Contact() {
  return (
    <Section id="contact" height="50vh">
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
