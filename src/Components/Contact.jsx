import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  box-shadow:
    -0.5px 0 0 var(--light-0-95),
    0.5px 0 0 var(--light-0-95);
  border-bottom: 0.0001rem solid var(--light-0-2);
  z-index: 150;
`;

function Contact() {
  return <Section id="contact">contact</Section>;
}

export default Contact;
