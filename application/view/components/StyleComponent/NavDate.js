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
  width:15%;
  height:inherit;
  text-align: center;
  color:#fff;
  border-right:5px solid #fff;
  font-size:2em;
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
