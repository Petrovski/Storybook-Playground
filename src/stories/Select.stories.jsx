import React from 'react';

import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { onSelectChange: { action: 'value changed' } },
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: [
    {
      key: 1,
      value: 'test value',
      name: 'text value 1',
    },
    {
      key: 1,
      value: 'test value',
      name: 'text value 2',
    },
    {
      key: 1,
      value: 'test value',
      name: 'text value 3',
    },
    {
      key: 1,
      value: 'test value',
      name: 'text value 4',
    },
  ],
};
