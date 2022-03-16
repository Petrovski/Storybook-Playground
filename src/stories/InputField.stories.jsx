import React from 'react';

import { InputField } from './InputField';

export default {
  title: 'InputField',
  component: InputField,
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { onChange: { action: 'value changed' } },
};

const Template = (args) => <InputField {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Test',
  type: 'text',
  // value: '',
  placeholder: '',
};
