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

export const Tab = styled.div
`
    width:90%;
    margin:0 auto;
    height:60px;
    display:flex;
`;

export const  TabMark = styled.p
`
    line-height:60px;
    flex-grow:1;
    text-align: center;
    color:#888;
`;

export const TabMarkActive = styled(TabMark)
`
    border-bottom:2px solid #555;
`;

export const TabContent = styled.div
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
    margin-top:10px;
    width:100%;
`
export const Thing = styled.li
`   
    padding:7px 0;
    font-family:微軟正黑體;
`;
