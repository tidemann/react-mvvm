import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    deepControls: {enabled: true},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
