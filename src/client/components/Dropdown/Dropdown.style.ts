import { css } from 'styled-components';

export default css`
  &.listbox-area {
    position: relative;
    height: 53px;
    border: 2px solid grey;

    .listbox-dropdown-container {
      width: 100%;
      position: relative;
      height: 48px;
      top: 5px;
    }

    .dropdown-button {
      width: 100%;
      padding: 10px 50px;
      background-color: white;
      border: 1px solid grey;
      cursor: pointer;
      height: 100%;
    }

    .hidden {
      display: none;
    }

    ul {
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 100%;

      li {
        width: 100%;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        border: 1px solid grey;
        cursor: pointer;
        background-color: ${(props) =>
          props.theme.COLORS ? props.theme.COLORS.BACKGROUND.PRIMARY : 'white'};
      }
    }
  }
`;
