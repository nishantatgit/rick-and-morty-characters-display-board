import DEFAULTS from '../common';
interface COLORS {
  PRIMARY: string;
  SECONDARY: string;
  TERTIARY: string;
  QUATERNARY: string;
  QUINARY: string;
}

const COLORS = {
  PRIMARY: '#F2F2F2',
  SECONDARY: '#CEE1F2',
  TERTIARY: '#DB9CB8',
  QUATERNARY: '#EBBA6C',
  QUINARY: '#022342',
}

export default {
  ...DEFAULTS.COLORS,
  ...COLORS,
  BACKGROUND : {
    PRIMARY: COLORS.PRIMARY,
    SECONDARY: COLORS.SECONDARY
  },
  TEXT: {
    PRIMARY: COLORS.QUINARY,
    SECONDARY: COLORS.QUATERNARY
  }
}