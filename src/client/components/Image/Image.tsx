import React from 'react';
import styles from './Image.style';
import withStyles from '../../utils/withStyles';

const Image = (props: { className: string; src: string }) => {
  return <img className={`${props.className} image`} src={props.src} />;
};

export default withStyles(styles, Image);
