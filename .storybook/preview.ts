import type { Preview } from "@storybook/react";
import { withTheme } from "./withTheme.decorator";
import "./globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "dark",
          value: "#202020",
        },
        {
          name: "light",
          value: "#d8d8d8",
        },
      ],
    },
  },
};

export const decorators = [withTheme];

export default preview;
