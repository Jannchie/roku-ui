// .storybook/manager.js

import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: "sidebar",
});
