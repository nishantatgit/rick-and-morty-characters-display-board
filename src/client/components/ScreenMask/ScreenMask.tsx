import React, { useEffect } from 'react';

import styles from './ScreenMask.style';
import withStyles from '../../utils/withStyles';

const ScreenMask = (props: { className: string }) => {
  const { className } = props;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return function cleanUp() {
      document.body.style.overflow = 'auto';
    };
  });
  return <div className={`${className} screen-mask`}></div>;
};

export default withStyles(styles, ScreenMask);
