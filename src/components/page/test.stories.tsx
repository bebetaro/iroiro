// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Page } from ".";

export default {
  title: __dirname,
  component: Page,
  decorators: [
    (storyFn) => (
      <>
        <div>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Page {...args} />;

export const Component = Template.bind({});
