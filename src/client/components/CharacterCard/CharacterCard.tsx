import React from 'react';

import Image from '../Image/Image';
import withStyles from '../../utils/withStyles';
import styles from './CharacterCard.style';

import Ufo from '../../../../public/svg/alien.svg';
import Human from '../../../../public/svg/human.svg';
import Humanoid from '../../../public/svg/humanoid.svg';
import Robot from '../../../../public/svg/robot.svg';
import Mytholog from '../../../../public/svg/mytholog.svg';
import Unknown from '../../../../public/svg/unknown.svg';

type props = {
  className: string;
  name: string;
  status: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
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
    species,
    cssClass,
  } = props;

  const svgClass =
    status === 'Alive' ? 'alive' : status === 'unknown' ? 'unknown' : 'dead';

  const getStatusSvg = (species: string) => {
    const svgProps = {
      height: 50,
      width: 50,
    };
    switch (species) {
      case 'Human':
        return <Human {...svgProps} />;
      case 'Alien':
        return <Ufo {...svgProps} />;
      case 'Mytholog':
        return <Mytholog {...svgProps} />;
      case 'Humanoid':
        return <Robot {...svgProps} />;
      case 'Robot':
        return <Robot {...svgProps} />;
      default:
        return <Unknown {...svgProps} />;
    }
  };

  return (
    <article className={`${className} ${cssClass}`}>
      <div className='image-container'>
        <Image src={image} textOnImage={name} alt={`Character ${name}`} />
      </div>
      <div className='character-card__details'>
        <div className='character-card__details__status'>
          <div className='svg-container'>
            <svg className={svgClass} viewBox='0 0 100 100'>
              <circle cx='50' cy='50' r='40' />
            </svg>
          </div>
          <span className='text'>{status}</span>
        </div>
        <span className='character-card__details__gender'>{gender}</span>
        <span className='character-card__details__origin'>{origin}</span>
        <span className='character-card__details__location'>{location}</span>
        <div className='character-card__details__species'>
          {getStatusSvg(species)}
          <span>{species}</span>
        </div>
      </div>
    </article>
  );
};

export default withStyles(styles, CharacterCard);
