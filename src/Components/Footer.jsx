import styled from "styled-components";
import Section from "../UI/Section";
import Icon from "../UI/Icon";
import Link from "../UI/Link";
import Row from "../UI/Row";

const StyledFooter = styled.div`
  font-size: 1.75rem;
  top: 1.2vh;
  z-index: 200;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: hidden;
`;

const Footerlist = styled.div`
  margin: 2vh auto;
  display: flex;
  height: 6vh;
  width: 90vw;
  align-items: center;
  justify-content: space-between;
  padding: 0 3vw 0 3vw;
  color: var(--light-0-85);
  box-shadow: 0 px 5px rgba(0, 0, 0, 0.03);
  border: 0.001px solid var(--blue-0-5);
  backdrop-filter: blur(5px);
  background-color: var(--light-0-03);
  white-space: nowrap;
`;

const Span = styled.div`
  margin-left: auto;
`;

function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();
  return (
    <Section id="footer" height="10vh">
      <StyledFooter>
        <Footerlist>
          <Row align="center" width="90vw">
            <Row align="center" gap="3vw">
              <Link href="https://github.com/JovinLiu">
                <Icon icon="github" />
              </Link>
              <Link href="https://www.linkedin.com/in/jovin-liu-b173b0128/">
                <Icon icon="linkedin" />
              </Link>
            </Row>
            <Span>{`Design and Coded by Jovin Liu. All Rights Reserved.`}</Span>
          </Row>
        </Footerlist>
      </StyledFooter>
    </Section>
  );
}

export default Footer;
