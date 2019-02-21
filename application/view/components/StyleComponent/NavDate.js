import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const NavCalendar = styled.div
`
  background:#545454;
  position:fixed;
  top:45px;
  height:100%;
  width:20%;
`;

export const DateControl = styled.div
`
  display:flex;
 -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  width:100%;
  margin-top:10px;
  margin-bottom:10px;
`;

export const DateInput = styled.input
`
    width:73%;
background:#545454;
color:#fff;
border:0;
outline:0;
`;

export const NewDateButton = styled.div
`
  width:22%;
  text-align: center;
  color:#fff;
`;

export const DelDateButton = styled.div
`
  width:100%;
  text-align: center;
  color:#fff;
`;

export const Calendar = styled.div
`
  overflow-y:hidden;
  height:100%;
  &:hover {
    overflow-y:auto;
  }
  &:after{
    content:'';
    height:100px;
    display:block;
  }
`

export const Year = styled.div
`

`;

export const YearNum = styled.div
`
  color:#fff;
  font-size:2.5em;
  margin-left:5%;
`;

export const AllMonth = styled.div
`

`
;

export const Month = styled.div
`
  display:flex;
  flex-wrap:warp;
  width:90%;
  margin:0 auto;
  margin-bottom:15px;
`;

export const MonthNum = styled.div
`
  background:#555;
min-width:1.2em;
  width:15%;
  height:inherit;
  text-align: center;
  color:#fff;
  font-size:1.8em;
  display:flex;

`;

export const Num = styled.span
`
 margin: auto;
`;

export const MonthDays = styled.ul
`
  width:85%;
  display:flex;
  list-style-type:none;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  border-left:5px solid #fff;
`;

export const Day = styled.li
`
  background:#6DB6F6;
  width:50px;
  height:50px;
  color:#fff;
  text-align:center;
  line-height:50px;
  border-radius:50px;
  margin:10px;
  flex-wrap:wrap;
  font-family:微軟正黑體;

`;

export const DayLink = styled(Link)`
  text-decoration:none;
  color:#fff;
`;
