import { css } from 'styled-components';
export default css`
  background-color: ${(props) => props.theme.COLORS.BACKGROUND.PRIMARY};
  color: ${(props) => props.theme.COLORS.TEXT.PRIMARY};
  .listbox-area {
    width: 150px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .list-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px 20px;
    justify-content: space-evenly;
    .list-item {
      width: calc(22.5% - 10px);
      background-color: ${(props) => props.theme.COLORS.BACKGROUND.SECONDARY};
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;
