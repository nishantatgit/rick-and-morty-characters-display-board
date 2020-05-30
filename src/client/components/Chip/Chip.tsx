import React from 'react';

import styles from './Chip.style';
import withStyles from '../../utils/withStyles';

const chip = (props: {
  label: string;
  className: string;
  cssClass: string;
  onClose?: any;
}) => {
  const { label, onClose, className, cssClass } = props;
  const handleOnCloseClick = (e: any) => {
    console.log('handling close clock');
    onClose && onClose(e);
    console.log('onClose', onClose);
  };
  return (
    <div className={`${className} ${cssClass} chip`}>
      <span>{label}</span>
      <button onClick={handleOnCloseClick}>X</button>
    </div>
  );
};

export default withStyles(styles, chip);
