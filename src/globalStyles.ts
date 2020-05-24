import theme from '../src/client/ui/themes';
export default `
  html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,
  address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,
  var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,
  thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,
  menu,nav,output,ruby,section,summary,time,mark,audio,video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  body {
    font-family: ${theme.COMMON.FONTS.FONT_FAMILY.BODY};
    overflow-x: hidden;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
  }
  .h1,h1,.h2,h2,h3,.h3,.h4,h4,.h5,h5,.h6,h6{
    font-family: ${theme.COMMON.FONTS.FONT_FAMILY.HEADING};
    font-weight: ${theme.COMMON.FONTS.FONT_WEIGHT.BOLD};
  }
  p,body{
    font-family: ${theme.COMMON.FONTS.FONT_FAMILY.BODY};
  }
  .h1,h1{
    font-size: ${theme.COMMON.FONTS.FONT_SIZE.HEADING.H1}px;
  }
  .h2,h2{
    font-size: ${theme.COMMON.FONTS.FONT_SIZE.HEADING.H2}px;
  }
  .h3,h3{
    font-size: ${theme.COMMON.FONTS.FONT_SIZE.HEADING.H3}px;
  }
  .h4,h4{
    font-size: ${theme.COMMON.FONTS.FONT_SIZE.HEADING.H4}px;
  }
  .h5,h5{
    font-size: ${theme.COMMON.FONTS.FONT_SIZE.HEADING.H5}px;
  }
  .h6,h6{
    font-size: ${theme.COMMON.FONTS.FONT_SIZE.HEADING.H6}px;
  }
  body,p{
    font-size: ${theme.COMMON.FONTS.FONT_SIZE.BODY.PRIMARY}px;
  }
`;
