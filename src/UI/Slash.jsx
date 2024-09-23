import styled from "styled-components";

const Div = styled.div`
  font-size: 1rem; /* text-xs */
  font-weight: 100; /* font-thin */
  color: var(--light-0-2); /* text-light-0-2 */
`

function Slash({ children }) {
  return <Div>{children}</Div>;
}

export default Slash;
