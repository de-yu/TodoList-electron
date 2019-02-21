import styled from 'styled-components';

export const DayThingBoard = styled.div
`
  position:relative;
  top:20px;
  background:#fff;
  width:70%;
  margin:0 auto;
  margin-bottom:50px;
  box-shadow:0px 1px 3px 1px #bbb; 
`;

export const DayThingBoardTop = styled.div
`
  background:#444;
  height:45px;
  width:100%;
  padding-right:1px;
  display:flex;
`;
export const DayThingAdd = styled.div
`
width:50%;
text-align: center;
color:#fff;
line-height:45px;
`;

export const DayThingDel = styled.div
`
width:50%;
text-align: center;
color:#fff;
line-height:45px;
`;

export const DayThingBoardEdit = styled.ul
`
  position:relative;
  width:100%;
  height:100%;
  min-height:500px;
`;

export const DayThingItem = styled.li
`
    width:95%;
    display:flex;
    margin:0 auto;
    margin-top:15px;
`;

export const DayThingIsFinish = styled.input
`
`;

export const DayThingText = styled.p
`
    width:90%;
    min-height:16px;
    outline:0;
    
`;