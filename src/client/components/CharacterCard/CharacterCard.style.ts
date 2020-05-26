import { css } from 'styled-components';

export default css`
  background-color: ${(props) => props.theme.COLORS.BACKGROUND.PRIMARY};
  color: ${(props) => props.theme.COLORS.TEXT.PRIMARY};
  display: flex;
  flex-direction: column;

  .character-card__details__name,
  .character-card__details__status,
  .character-card__details__gender,
  .character-card__details__origin,
  .character-card__details__location {
    display: block;
    margin-top: 5px;
  }

  .character-card__details {
    padding: 5px;
    text-align: center;
  }

  .character-card__details__status {
    .svg-container {
      height: 22px;
      width: 22px;
      display: inline-block;
      stroke: none;
      vertical-align: bottom;
      margin-right: 10px;
      svg {
        height: 100%;
        width: 100%;
        &.alive {
          fill: ${(props) => props.theme.COLORS.GREEN};
        }
        &.dead {
          fill: ${(props) => props.theme.COLORS.GREY};
        }
        &.unkonwn {
          fill: ${(props) => props.theme.COLORS.WHITE};
        }
      }
    }
    .text {
      display: inline-block;
    }
  }

  .character-card__details__species {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 15px;
    span {
      display: block;
    }
  }

  .character-card__details__gender {
    margin-top: 25px;
  }
  .image-container {
    width: 100%;
    height: auto;

    img {
      max-width: 100%;
    }
  }
`;
