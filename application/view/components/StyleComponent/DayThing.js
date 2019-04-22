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
    &:hover{
      cursor:pointer;
    }
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
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const DayThingIsFinishLabel = styled.label
`

`;

export const DayThingIsFinish = styled.input
`
    
    :checked ~ span::after {
        display: block;
    }
`;
export const DayThingIsFinishMark = styled.span
`
    position: absolute;
    left:9px;
    min-width:18px;
    height:18px;
    border:1px solid #555;
    margin-right:10px;

    ::after
    {         
        margin-top: 2px;
        margin-left:2px;
        background:#555;
        content:'';
        width:14px;
        height:14px;
        display:none;
    }

`;
export const DayThingText = styled.div
`
    width:90%;
    min-height:16px;
    outline:0;
    line-height:1.4em;

`;
