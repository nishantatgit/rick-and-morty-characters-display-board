import React from 'react';

import Image from '../Image/Image';
import withStyles from '../../utils/withStyles';
import styles from './CharacterCard.style';

type props = {
  className: string;
  name: string;
  status: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  cssClass: string;
};

const CharacterCard = (props: props) => {
  const {
    className,
    status,
    gender,
    origin: { name: origin },
    location: { name: location },
    name,
    image,
    cssClass,
  } = props;
  return (
    <article className={`${className} ${cssClass}`}>
      <div className='image-container'>
        <Image src={image} />
      </div>
      <div className='character-card__details'>
        <span className='character-card__details__name'>{name}</span>
        <span className='character-card__details__status'>{status}</span>
        <span className='character-card__details__gender'>{gender}</span>
        <span className='character-card__details__origin'>{origin}</span>
        <span className='character-card__details__location'>{location}</span>
      </div>
    </article>
  );
};

export default withStyles(styles, CharacterCard);
