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
    height:60px;
    display:flex;
`;

export const  TabMark = styled.p
`
    line-height:60px;
    flex-grow:1;
    text-align: center;
    color:#555;
`;

export const TabMarkActive = styled(TabMark)
`
    background:#555;
    color:#fff;
`;

export const TabContent = styled.div
`
    margin-top:15px; 
`;

export const ContentBlock = styled.div
`
    display:flex;
`;


export const Date = styled.div
`
      background:#555;
      color:#fff;
      width:20%;
      text-align: center;
`;
export const ThingBlock = styled.ul
`
    width:80%;
`
export const Thing = styled.li
`
    font-family:微軟正黑體;
`;
