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
    position:relative;
    left:5%;
    width:70%;
    display:flex;
    padding:18px 0px;

    :nth-child(1)
    {
        margin-top:30px;
    }
`;

export const DayThingIsFinishLabel = styled.label
`
    position:relative;
`;

export const DayThingIsFinish = styled.input
`
    display:none;
    :checked ~ span::after {
        display: block;
    }
`;
export const DayThingIsFinishMark = styled.span
`
    background:#fff;
    position: absolute;
    min-width:18px;
    height:18px;
    border:1px solid #555;
    border-radius:2px;
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
    position:relative;
    margin-left:34px;
    min-height:16px;
    outline:0;
    line-height:1.4em;
    color:#555;
`;
