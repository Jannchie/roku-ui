import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import { DocsContainer } from "./DocsContainer";
import "./preview.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      {
        name: "zinc",
        value: "#18181b",
      },
      {
        name: "white",
        value: "#FFF",
      },
    ],
  },

  darkMode: {
    darkClass: "dark",
    lightClass: "light",
    stylePreview: true,
    dark: {
      ...themes.dark,
      fontBase: "sans-serif",
      fontCode: "monospace",
      brandTitle: "Roku UI",
      appBg: "#1f1f1f",
      inputBg: "#1f1f1f",
      appContentBg: "#1f1f1f",
      barBg: "#1f1f1f",
    },
    light: {
      ...themes.light,
      brandTitle: "Roku UI",
      fontBase: "sans-serif",
      fontCode: "monospace",
    },
  },
  viewMode: "docs",
  docs: {
    container: DocsContainer,
  },
};
export const decorators = [
  (Story) => (
    <div className={useDarkMode() ? "dark" : "light"}>
      <Story />
    </div>
  ),
];
