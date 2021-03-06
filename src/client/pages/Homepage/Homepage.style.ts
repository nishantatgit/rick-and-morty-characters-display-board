import { css } from 'styled-components';
export default css`
  position: relative;
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
    padding: 5px;
    justify-content: space-evenly;
    .list-item {
      width: 80%;
      background-color: ${(props) => props.theme.COLORS.BACKGROUND.SECONDARY};
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }

  .filter-chip {
    display: inline-block;
    color: ${(props) => props.theme.COLORS.TERTIARY};
    border: 1px solid ${(props) => props.theme.COLORS.TERTIARY};
    margin-right: 20px;
    button {
      background: none;
      border: none;
      cursor: pointer;
      color: ${(props) => props.theme.COLORS.TERTIARY};
    }
  }

  /* styling for loader */
  .sc-fzpans {
    position: fixed;
    top: 50vh;
    left: 60%;
    transform: translate(-60%, -50%);
    z-index: 100;

    div {
      border: 4px solid ${(props) => props.theme.COLORS.QUINARY};
    }
  }

  .screen-mask {
    background-color: ${(props) => props.theme.COLORS.BACKGROUND.PRIMARY};
    opacity: 0.7;
    z-index: 50;
    margin-left: 20%;
  }

  min-height: 99vh;

  @media ${(props) => props.theme.MEDIA_QUERIES.MEDIA_QUERIES.xSmall} {
    .list-container {
      .list-item {
        width: calc(40% - 5px);
        background-color: ${(props) => props.theme.COLORS.BACKGROUND.SECONDARY};
        margin-top: 30px;
        margin-bottom: 30px;
      }
    }
  }

  @media ${(props) => props.theme.MEDIA_QUERIES.MEDIA_QUERIES.small} {
    .list-container {
      width: 78%;
      margin-left: 20%;
      .list-item {
        width: calc(30% - 3px);
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
    form {
      position: fixed;
      top: 20px;
      width: 20%;
    }
  }
  @media ${(props) => props.theme.MEDIA_QUERIES.MEDIA_QUERIES.medium} {
    .list-container {
      padding: 10px;
      .list-item {
        width: calc(22.5% - 5px);
      }
    }
  }
`;
