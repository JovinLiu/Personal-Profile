import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --dark: #1d1b22;
  --highlight-1: #e65b9a;
  --highlight-2: #3e7cd6;
  --blue: #789bce;
  --orange: #f2887e;
  --orange-0-05: rgb(242, 136, 126, 0.05);
  --orange-0-15: rgb(242, 136, 126, 0.15);
  --purple: #8768a6;
  --turquoise: #5bdfe7;
  --yellow: #f2ae72;
  --grey: #5c5c5c;
  --light-0-75: rgba(255, 255, 255, .75);
  --light-0-85: rgba(255, 255, 255, .85);
  --light-0-95: rgba(255, 255, 255, .95);
  --light-0-1: rgba(255, 255, 255, .1);
  --light-0-2: rgba(255, 255, 255, .2);
  --light-0-3: rgba(255, 255, 255, .3);
  --light-0-5: rgba(255, 255, 255, .5);
  --pink-0: rgba(230, 91, 154, 0);
  --purple-0: rgba(135, 104, 166, 0);
  --turquoise-0: rgba(91, 223, 231, 0);
  --blue-0: rgba(120, 155, 206, 0);
  --transition-1: all 0.2s ease-in-out;
  --transition-2: all 0.4s ease-out;
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

*::-webkit-scrollbar {
  width: 5px;
  height:5px;
  background-color: none
}

*::-webkit-scrollbar-track {
    background-color: none
  }

*::-webkit-scrollbar-thumb {
  background: var(--color-blue-1);
  border-radius: 10px;
}

*::-webkit-scrollbar-corner {
  background: none
}

body {
  position: relative; /* relative */
  min-height: 100vh; /* min-h-[100vh] */
  max-width: 100vw; /* max-w-[100vw] */
  overflow-X: hidden;
  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
/* button:focus, */
textarea:focus,
select:focus {
  outline: 2px solid var(--color-grey-700);
  outline-offset: 2px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
