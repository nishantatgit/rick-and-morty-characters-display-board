import React, { useState } from 'react';

const Checkbox = (props: { onChange: any; name: string; value: string }) => {
  const { onChange, name, value } = props;
  const [checked, setChecked] = useState(false);

  const onChangeHandler = (e: any) => {
    console.log('checkbox on change handler clicked');
    console.log(e.target.name, e.target.checked, e.target.value);
    setChecked(e.target.checked);
    onchange && onChange(e);
  };

  return (
    <label>
      {value}
      <input
        name={name}
        type='checkbox'
        onChange={onChangeHandler}
        checked={checked}
        value={value}
      ></input>
    </label>
  );
};

export default Checkbox;
