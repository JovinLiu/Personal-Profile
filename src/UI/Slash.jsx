import styled from "styled-components";

const Div = styled.div`
  font-size: 2rem; /* text-xs */
  font-weight: 100; /* font-thin */
  color: var(--light-0-95); /* text-light-0-2 */
`;

function Slash({children}) {
  return <Div>{children}</Div>;
}

export default Slash;
