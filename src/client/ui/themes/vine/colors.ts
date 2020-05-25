import DEFAULTS from '../common';
interface COLORS {
  PRIMARY: string;
  SECONDARY: string;
  TERTIARY: string;
  QUATERNARY: string;
  QUINARY: string;
}

const COLORS = {
  PRIMARY: '#FBECD6',
  SECONDARY: '#D1A784',
  TERTIARY: '#527069',
  QUATERNARY: '#25202A',
  QUINARY: '#443D44',
};

export default {
  ...DEFAULTS.COLORS,
  ...COLORS,
  BACKGROUND: {
    PRIMARY: COLORS.PRIMARY,
    SECONDARY: COLORS.SECONDARY,
  },
  TEXT: {
    PRIMARY: COLORS.QUINARY,
    SECONDARY: COLORS.QUATERNARY,
  },
};
