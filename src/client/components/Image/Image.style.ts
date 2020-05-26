import { css } from 'styled-components';

export default css`
  width: 100%;
  position: relative;
  .image-text {
    position: absolute;
    display: block;
    right: 0;
    padding: 10px;
    text-align: right;
    font-weight: ${(props) => props.theme.FONTS.FONT_WEIGHT.SEMIBOLD};
    top: 10px;
    background-color: ${(props) => props.theme.COLORS.BACKGROUND.PRIMARY};
    opacity: 0.7;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .image {
    max-width: 100%;
  }
`;
