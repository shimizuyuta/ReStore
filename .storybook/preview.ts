import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { createGlobalStyle } from "styled-components";
import * as NextImage from "next/image";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  textarea, {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: #000;
  }
  ou ul {
    list-style: none;
  }
`;
export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

// const OriginalNestImage = NextImage.default;
// Object.defineProperties(NextImage, 'default',{
//   configurable: true,
//   value: (props) => <OriginalNestImage {...props} unoptimized />
// })
const OriginalNextImage = NextImage.default;
