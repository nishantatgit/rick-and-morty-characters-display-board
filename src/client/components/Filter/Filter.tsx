import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Radio from '../RadioButton/Radio';

const Filter = (props: {
  values: Array<any>;
  onChange?: any;
  filterLabel: string;
  filterName: string;
  type: string;
}) => {
  const { values, onChange, filterLabel, filterName, type } = props;
  const checkbox = (values: any[]) => {
    return (
      values &&
      values.map((value: { value: string }) => (
        <Checkbox
          onChange={onChange}
          name={filterName}
          value={value.value}
        ></Checkbox>
      ))
    );
  };

  const InputType = {
    radio: (values: { label: string; value: string }[]) => {
      return (
        <Radio onChange={onChange} name={filterName} options={values}></Radio>
      );
    },
    checkbox: (values: any[]) => {
      return (
        values &&
        values.map((value: { value: string }) => (
          <Checkbox
            onChange={onChange}
            name={filterName}
            value={value.value}
          ></Checkbox>
        ))
      );
    },
  };

  return (
    <fieldset>
      <legend>{filterLabel}</legend>
      {InputType[type](values)}
    </fieldset>
  );
};

export default Filter;
