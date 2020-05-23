import React from 'react';

import styles from './Homepage.style';
import withStyles from '../../utils/withStyles';

const HomePage = (props) => {
  const cssClasses = `${props.className} abc`; 
  return <h1 className={cssClasses}>Homepage </h1>
}  

export default withStyles(styles, HomePage);