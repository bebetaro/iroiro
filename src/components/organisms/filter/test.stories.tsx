// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React, { useCallback, useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Filter, Props } from ".";
import stories from "./test.stories.css";
import { Category, Year } from "../../../atoms/type";

export default {
  title: __dirname,
  component: Filter,
  decorators: [
    (storyFn) => (
      <>
        <div className={stories.frame}>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => {
  const [year, setYear] = useState<Year>("None");
  const [category, setCategory] = useState<Category>("None");
  const onClickYear = useCallback(
    (year: Year) => () => {
      setYear(year);
    },
    []
  );
  const onClickCategory = useCallback(
    (category: Category) => () => {
      setCategory(category);
    },
    []
  );
  return (
    <Filter
      year={year}
      category={category}
      onSetYear={onClickYear}
      onSetCategory={onClickCategory}
    />
  );
};

export const Component = Template.bind({});
