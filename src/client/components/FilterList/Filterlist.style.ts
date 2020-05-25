import { css } from 'styled-components';

export default css`
  padding: 10px;
  fieldset {
    padding: 10px;
    label {
      display: block;
    }

    &:after {
      content: '';
      display: inline-block;
      height: 1px;
      background-color: ${(props) => props.theme.COLORS.QUINARY};
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;
