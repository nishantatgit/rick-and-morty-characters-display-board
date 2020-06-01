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
      position: relative;
      justify-content: space-between;
      margin-bottom: 5px;
      cursor: pointer;
      &:after {
        content: '';
        display: inline-blocck;
        width: 14px;
        height: 14px;
        border: 2px solid ${(props) => props.theme.COLORS.QUINARY};
        border-radius: 50%;
      }

      &.selected {
        &:before {
          content: '';
          display: inline-blocck;
          width: 10px;
          height: 10px;
          background-color: ${(props) => props.theme.COLORS.QUINARY};
          border-radius: 50%;
          position: absolute;
          top: 4px;
          right: 4px;
        }
      }
    }

    input {
      position: absolute;
      left: -5000px;
    }

    input:focus + label {
      outline: 1px dotted grey;
    }

    margin-top: 20px;
    margin-bottom: 40px;
  }
`;
