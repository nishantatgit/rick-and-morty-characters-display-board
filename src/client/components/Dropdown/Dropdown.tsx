import React, { useState, useEffect } from 'react';
import withStyles from '../../utils/withStyles';
import styles from './Dropdown.style';

interface optionType {
  key: string;
  value: React.ReactNode;
}

//TDDO: handle keyboard and click outside events

const Dropdown = (props: {
  className: string;
  listBoxLabel: string;
  options: optionType[];
  onChange?: (e: any) => void;
}) => {
  const cssClasses = `listbox-area ${props.className}`;

  const [state, setState] = useState({
    selected: props.options[0],
    listOpen: false,
  });

  useEffect(() => {
    const docClickHandler = (e: any) => {
      const { target } = e;
      if (
        options.every((option) => option.key !== target.id) &&
        state.listOpen === true
      ) {
        setState({
          ...state,
          listOpen: false,
        });
      }
    };
    document.addEventListener('click', docClickHandler);

    return function cleanUp() {
      document.removeEventListener('click', docClickHandler);
    };
  });

  const getOptions = (options: optionType[]) =>
    options.map((option: optionType) => (
      <li
        id={option.key}
        key={option.key}
        data-key={option.key}
        role='option'
        onClick={handleOptionClick}
      >
        {option.value}
      </li>
    ));

  const handleButtonClick = (e: any) => {
    console.log(e);
    setState({
      ...state,
      listOpen: !state.listOpen,
    });
  };

  const handleOptionClick = (e: any) => {
    const {
      target: {
        dataset: { key },
      },
    } = e;
    const selected = props.options.filter((option) => option.key === key);
    setState({
      listOpen: false,
      selected: selected[0],
    });

    props.onChange && props.onChange(e);
  };

  const handleOnKeyUp = (e: { which: number; keyCode: number }) => {
    const keyCode = e.which || e.keyCode;
    console.log('keyCode', keyCode);
    console.log('on key up handled ....', e);
  };

  const { options } = props;

  return (
    <div className={cssClasses}>
      <span className='listbox-label' id='listbox-label'>
        {props.listBoxLabel}
      </span>
      <div className='listbox-dropdown-container' onKeyUp={handleOnKeyUp}>
        <button
          onClick={handleButtonClick}
          className='dropdown-button'
          id='dropdown-button'
          aria-labelledby='listbox-label dropdown-button'
          aria-haspopup='listbox'
        >
          {state.selected.value}
        </button>
        <ul
          className={!state.listOpen ? 'hidden' : ''}
          id='listbox-dropdown-list'
          role='listbox'
          aria-labelledby='listbox-label'
          aria-activedescendent='VINE'
        >
          {options && getOptions(options)}
        </ul>
      </div>
    </div>
  );
};

export default withStyles(styles, Dropdown);
