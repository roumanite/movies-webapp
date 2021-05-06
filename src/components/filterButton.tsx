import * as React from 'react';
import { Select } from 'antd';
import { Option as optionType } from 'models';
import 'antd/dist/antd.css';


const { Option } = Select;

interface Props {
  defaultValue: string;
  onChange: (value: string) => void;
  options: optionType[];
  value: string;
  icon?: React.ReactNode;
}

const FilterButton = (props: Props): JSX.Element => (
  <Select
    defaultValue={props.defaultValue}
    value={props.value}
    style={{ width: '10rem', margin: '0.5rem' }}
    onChange={props.onChange}
    suffixIcon={props.icon}
  >
    {props.options.map(option => (
      <Option key={option.value} value={option.value}>{option.text}</Option>
    ))}
  </Select>
);

export default FilterButton;
