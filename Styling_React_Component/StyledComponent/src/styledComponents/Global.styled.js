import { createGlobalStyle } from "styled-components";
// for global style, we need to use createGlobalStyle, and then directly apply css inside template literal

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`;

// now we can use globalStyle inside our app component.
