import styled from 'styled-components';

export const FinishBoard = styled.div
`
  position:relative;
  top:20px;
  background:#fff;
  width:70%;
  margin:0 auto;
  margin-bottom:50px;
  box-shadow:0px 1px 3px 1px #bbb; 
`;

export const BoardHeader = styled.div
`
    background:#444;
    width:100%;
    margin:0 auto;
    margin-bottom:30px;
    height:60px;
`;

export const  Header = styled.p
`
    width:90%;
    line-height:60px;
    color:#eee;
    font-size:1.5em;
    margin:0 auto;
    font-family:微軟正黑體;
`;

export const Content = styled.div
`
    margin-top:15px; 
`;

export const ContentBlock = styled.div
`
    width:90%;
    margin:0 auto;
`;

export const Date = styled.div
`

    width:100%;
    border-bottom:1px solid #aaa;
`;

export const DateNum =  styled.span
`
      background:#fff;
      position:relative;
      top:10px;
      right:1px;
      display:table;
      margin:0 auto;
      padding:0 10px;
`;

export const ThingBlock = styled.ul
`
    margin-top:30px;
    width:100%;
`
export const ThingItem = styled.li
`   
    margin-top:20px;
    margin-bottom:20px;
    font-family:微軟正黑體;
    display:flex;
`;

export const ThingMarker = styled.div
`
    position:relative;
    width:18px;
    height:18px;
    border:1px solid #555;
    margin-right:10px;
   
    ::before
    {   
        margin-top: 2px;
        margin-left:2px;
        background:#555;
        content:'';
        width:14px;
        height:14px;
        display:block;
    }
`;


export const Thing = styled.p
`
    line-height:20px;
`

export const Footer = styled.div
`
    width:90%;
    margin:0 auto;
    height:60px;
`;
