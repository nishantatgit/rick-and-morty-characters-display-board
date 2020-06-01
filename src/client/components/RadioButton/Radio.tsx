import React, { useState } from 'react';

const Radio = (props: {
  onChange: any;
  options: { label: string; value: string }[];
  name: string;
}) => {
  const { onChange, options, name } = props;
  const [value, setInputValue] = useState('');
  const onChangeHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };
  return (
    <>
      {options &&
        options.map(
          (option: { label: string; value: string | number | string[] }) => {
            const id = `${name}-${option.value}`;
            return (
              <>
                <input
                  type='radio'
                  name={name}
                  value={option.value}
                  onChange={onChangeHandler}
                  checked={value === option.value}
                  id={id}
                ></input>
                <label
                  className={value === option.value ? 'selected' : ''}
                  htmlFor={id}
                >
                  {option.label}
                </label>
              </>
            );
          }
        )}
    </>
  );
};

export default Radio;
