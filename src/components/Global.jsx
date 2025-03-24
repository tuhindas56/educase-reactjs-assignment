import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
  --root-padding: 2rem;
  --primary: #6c25ff;
  --secondary: #6c25ff4b;
  --bg: #f7f9fa;
    font-family: Rubik;
    font-size: 16px;
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;

}

body {
  display: flex;
  justify-content: center;
  padding: var(--root-padding);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

#root, #__next {
  isolation: isolate;
}

#root {
  display: flex;
  flex-direction: column;
  width: 375px;
  height: calc(100vh - (2 * var(--root-padding)));
  border: 1px solid #eeefef;
  background-color: var(--bg);
}


h1 {
  font-size: 1.7rem;
  font-weight: 500;
  color: #1d2226;
}

p {
  color: #74777b;
    font-size: 1.1rem;
}
`

export default GlobalStyles
