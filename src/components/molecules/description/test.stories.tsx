// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Description, Props } from ".";
import stories from "./test.stories.css";

export default {
  title: __dirname,
  component: Description,
  decorators: [
    (storyFn) => (
      <>
        <div className={stories.frame}>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <Description {...args} />;

export const Component = Template.bind({});
Component.args = {
  title: "星のカービィスーパーDX",
  url: "https://www.nintendo.co.jp/n02/shvc/p_akfj/index.html",
  description: `
  言わずと知れた名作ゲーム  
  協力プレイにミニゲームによる対戦、そして本編まで面白い  
  セーブデータが消えやすい点だけ玉に瑕だが、それを補って余りある面白さがある
  `,
};
