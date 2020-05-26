export const BREAKPOINTS = {
  xSmall: 480,
  xSmallMax: 768 - 1,
  small: 768,
  smallMax: 1024 - 1,
  medium: 1024,
  mediumMax: 1440 - 1,
  large: 1440,
};

export const MEDIA_QUERIES = {
  xSmall: `(min-width: ${BREAKPOINTS.xSmall}px)`,
  xSmallMax: `(max-width: ${BREAKPOINTS.xSmallMax}px)`,
  small: `(min-width: ${BREAKPOINTS.small}px)`,
  smallMax: `(max-width: ${BREAKPOINTS.smallMax}px)`,
  smallOnly: `
    (min-width: ${BREAKPOINTS.small}px)
    and
    (max-width: ${BREAKPOINTS.smallMax}px)
  `,
  medium: `(min-width: ${BREAKPOINTS.medium}px)`,
  mediumMax: `(max-width: ${BREAKPOINTS.mediumMax}px)`,
  mediumOnly: `
    (min-width: ${BREAKPOINTS.medium}px)
    and
    (max-width: ${BREAKPOINTS.mediumMax}px)
  `,
  large: `(min-width: ${BREAKPOINTS.large}px)`,
};

export default {
  BREAKPOINTS,
  MEDIA_QUERIES,
};
