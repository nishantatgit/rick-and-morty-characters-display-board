import { css } from 'styled-components';

export default css`
  background-color: ${(props) => props.theme.COLORS.BACKGROUND.PRIMARY};
  color: ${(props) => props.theme.COLORS.TEXT.PRIMARY};
  display: flex;
  flex-direction: column;
  .character-card__details {
    padding: 5px;
  }
  .character-card__details__name,
  .character-card__details__status,
  .character-card__details__gender,
  .character-card__details__origin,
  .character-card__details__location {
    display: block;
  }
  .image-container {
    width: 100%;
    height: auto;

    img {
      max-width: 100%;
    }
  }
`;
