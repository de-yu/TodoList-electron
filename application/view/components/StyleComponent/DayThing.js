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
    width:90%;
    margin:0 auto;
    display:flex;
    padding:18px 0px;
    cursor:move;
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
    min-width:16px;
    height:16px;
    border:2px solid #888;
    ::after
    {         
        margin-top:1px;
        margin-left:4px;
        content:'';
        width:6px;
        height:9px;
        display:none;
        border: solid #555;
        border-width: 0 1.5px 1.5px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

`;
export const DayThingText = styled.textarea
`
    position:relative;
    width: 90%;
    margin-left:34px;
    min-height:16px;
    padding:0;
    outline:0;
    border:0;
    resize:none;
    font-size:1em;
    line-height:1.4em;
    color:#555;
`;
