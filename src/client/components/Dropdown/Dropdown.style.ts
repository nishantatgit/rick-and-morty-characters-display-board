import  { css } from 'styled-components';

export default css`
  &.listbox-area{
    
    .dropdown-button{
      padding: 10px 50px;
      background-color: white;
      border: 1px solid grey;
      cursor: pointer;
      border-radius: 5px;
    }

    .hidden{
      display: none;
    }

    ul{
      list-style: none;
      padding: 0;
    }
  }
`