import React from 'react';
import styles from './Image.style';
import withStyles from '../../utils/withStyles';

const Image = (props: {
  className: string;
  src: string;
  alt: string;
  textOnImage: string;
}) => {
  const { className, src, alt, textOnImage } = props;

  return (
    <div className={className}>
      {textOnImage && <span className='image-text'>{textOnImage}</span>}
      <img alt={alt} className='image' src={src} />
    </div>
  );
};

export default withStyles(styles, Image);
