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
    background:#2196F3;
    position: absolute;
    min-width:18px;
    height:18px;
    border-radius:2px;

    ::after
    {         
        margin-top:1px;
        margin-left:5px;
        background:#2196F3;
        content:'';
        width:6px;
        height:10px;
        display:none;
        border: solid white;
        border-width: 0 2px 2px 0;
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
    outline:0;
    border:0;
    resize:none;
    line-height:1.4em;
    color:#555;
`;
