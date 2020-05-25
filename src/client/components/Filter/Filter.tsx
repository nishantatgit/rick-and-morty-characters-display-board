import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

const Filter = (props: {
  values: Array<any>;
  onChange?: any;
  filterLabel: string;
  filterName: string;
}) => {
  const { values, onChange, filterLabel, filterName } = props;
  return (
    <fieldset>
      <legend>{filterLabel}</legend>
      {values &&
        values.map((value) => (
          <Checkbox
            onChange={onChange}
            name={filterName}
            value={value}
          ></Checkbox>
        ))}
    </fieldset>
  );
};

export default Filter;
