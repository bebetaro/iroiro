// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Modals, Props } from ".";

export default {
  title: __dirname,
  component: Modals,
  decorators: [(storyFn) => <>{storyFn()}</>],
} as Meta;

const Template: Story<Props> = (args) => <Modals {...args} />;

export const Component = Template.bind({});
