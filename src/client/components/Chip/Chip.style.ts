import { css } from 'styled-components';

export default css`
  position: relative;
  padding: 5px 10px;
  border-radius: 5px;
  border-color: 1px solid ${(props) => props.theme.COLORS.BACKGROUND.TERTIARY};
`;
