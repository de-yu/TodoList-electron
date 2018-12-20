
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavCalendar = styled.div
`
  background:#545454;
  position:fixed;
  top:45px;
  height:100%;
  width:20%;
`;

const Month = styled.div
`
  display:flex;
  flex-wrap:warp;
  width:90%;
  margin:0 auto;
  margin-bottom:15px;
`;

const MonthNum = styled.div
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

const Num = styled.span
`
 margin: auto;
`;

const MonthDays = styled.ul
`
  width:85%;
  display:flex;
  list-style-type:none;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
`;

const Day = styled.li
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

export default class NavDate extends React.Component
{
  constructor(props) {
    super()
  }
  render() {
      return(
              
    <NavCalendar>
      <Month>
        <MonthNum>
            <Num>11</Num>
        </MonthNum>
        <MonthDays>
            <Day>1</Day>
            <Day>5</Day>
            <Day>10</Day>
        </MonthDays>
      </Month>
      <Month>
        <MonthNum>
        <Num>12</Num>
        </MonthNum>
        <MonthDays>
            <Day>1</Day>
            <Day>5</Day>
            <Day>9</Day>
            <Day>12</Day>
            <Day>15</Day>
            <Day>20</Day>
           <Day>21</Day>
            <Day>25</Day>
            <Day>30</Day>
        </MonthDays>
      </Month>
    </NavCalendar>
    )
  }
}