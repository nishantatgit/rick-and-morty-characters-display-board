import { css } from 'styled-components';
export default css`
  &.homepage {
    background-color: ${(props) => props.theme.COLORS.BACKGROUND.PRIMARY};
    color: ${(props) => props.theme.COLORS.TEXT.PRIMARY};
    .listbox-area {
      width: 150px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
`;
