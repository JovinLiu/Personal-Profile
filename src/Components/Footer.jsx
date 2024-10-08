//Library
import styled from "styled-components";
//Components
import Section from "../UI/Section";
import Icon from "../UI/Icon";
import Link from "../UI/Link";
import Row from "../UI/Row";
//Style
const StyledFooter = styled.div`
  font-size: 1.75rem;
  top: 1.2rem;
  z-index: 200;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: hidden;
`;

const Footerlist = styled.div`
  margin: 2rem auto;
  display: flex;
  height: 6rem;
  width: 90vw;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem 0 3rem;
  color: var(--light-0-85);
  box-shadow: 0 px 5px rgba(0, 0, 0, 0.03);
  border: 0.001px solid var(--blue-0-5);
  backdrop-filter: blur(5px);
  background-color: var(--light-0-03);
  white-space: nowrap;
`;

const Span = styled.div`
  margin-left: auto;
  white-space: pre-wrap;
  text-align: end;
`;

function Footer() {
  const year = new Date(Date.now()).getFullYear();

  return (
    <Section id="footer" position="relative">
      <div>
        <StyledFooter>
          <Footerlist>
            <Row align="center" width="90vw">
              <Row align="center" gap="3vw">
                <Link href="https://github.com/JovinLiu">
                  <Icon category="github" />
                </Link>
                <Link href="https://www.linkedin.com/in/jovinliu/">
                  <Icon category="linkedin" />
                </Link>
              </Row>
              <Span id="footer-text">{`Coded by Jovin Liu. © ${year} Jovin Liu. All Rights Reserved.`}</Span>
            </Row>
          </Footerlist>
        </StyledFooter>
      </div>
    </Section>
  );
}

export default Footer;
