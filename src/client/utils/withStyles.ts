import styled from 'styled-components';
const withStyles = (styles: any, component: any) => {
  console.log(styles);
  return styled(component)`
    ${styles}
  `;
};

export default withStyles;