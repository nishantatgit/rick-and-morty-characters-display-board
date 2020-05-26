import { css } from 'styled-components';

export default css`
  padding: 10px;
  fieldset {
    padding: 10px;
    width: 80%;
    margin: auto;

    legend {
      width: 100%;
      &:after {
        content: '';
        display: inline-block;
        height: 1px;
        background-color: ${(props) => props.theme.COLORS.QUINARY};
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

    label {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }

    margin-top: 20px;
    margin-bottom: 40px;
  }
`;
