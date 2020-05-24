import React from 'react';
import styles from './Image.style';
import withStyles from '../../utils/withStyles';

const Image = ({ props }) => {
  return <img className={`${props.className} image`} src={props.img} />;
};

export default withStyles(styles, Image);
