import React from 'react';

import Image from '../Image/Image';
import withStyles from '../../utils/withStyles';
import styles from './CharacterCard.style';

type props = {
  className: string;
  status: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
};

const CharacterCard = ({ props: props }) => {
  const {
    data: { className, status, gender, origin, location, image },
  } = props;
  return (
    <section className={`${className} character-card`}>
      <Image src={image}></Image>
      <div className='character-card__details'>
        <span className='character-card__details__name'>{name}</span>
        <span className='character-card__details__status'>{status}</span>
        <span className='character-card__details__gender'>{gender}</span>
        <span className='character-card__details__origin'>{origin}</span>
        <span className='character-card__details__location'>{location}</span>
      </div>
    </section>
  );
};

export default withStyles(styles, CharacterCard);
