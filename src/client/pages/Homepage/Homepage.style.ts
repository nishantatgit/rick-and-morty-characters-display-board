import { css } from 'styled-components';
export default css`
 &.abc{
   background-color: ${props => props.theme.COLORS.BACKGROUND.PRIMARY};
   color: ${props => props.theme.COLORS.TEXT.PRIMARY}
 }
`