import React, { useState } from 'react';
import withStyles from '../../utils/withStyles';
import styles from './Dropdown.style';

type optionType = {
  key : string;
  value: React.ReactNode
};

const Dropdown = (props: { className: string; listBoxLabel: string; options: optionType[]; }) => {
  
  const cssClasses = `listbox-area ${props.className}`;
  
  const [ state, setState ] = useState({
    selected: 'DARK',
    listOpen: false
  });

  const getOptions = (options: optionType[]) => {
    return options.map( (option: optionType) => <li id={option.key} key={option.key} data-key={option.key} role="option" onClick={handleOptionClick}>{option.value}</li>)
  }

  const handleButtonClick = (e: any) => {
    console.log(e);
    setState({
      ...state,
      listOpen: !state.listOpen
    })
  }

  const handleOptionClick = (e: { target: any; } ) => {
    console.log('event target ',  e.target);
  }
  
  return (
    <div className={cssClasses}>
      <span className="listbox-label" id="listbox-label">{props.listBoxLabel}</span>
      <div className="listbox-dropdown-container">
        <button onClick={handleButtonClick} className="dropdown-button" id="dropdown-button" aria-labelledby="listbox-label dropdown-button" aria-haspopup="listbox">
          {state.selected}
        </button>
        <ul className={!state.listOpen ? 'hidden' : ''} id="listbox-dropdown-list" role="listbox" aria-labelledby="listbox-label" aria-activedescendent="VINE">
          {getOptions(props.options)}
        </ul>
      </div>
    </div>
  );
}

export default withStyles(styles,Dropdown);