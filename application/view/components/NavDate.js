
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavCalendar = styled.div
`
  background:#545454;
  position:fixed;
  top:45px;
  height:100%;
  width:200px;
`;

const Month = styled.div
`
  display:flex;
  flex-wrap:warp;
  width:90%;
  margin:0 auto;
`;

const MonthNum = styled.div
`
  background:#555;
  width:30%;
  height:100px;
  text-align: center;
  color:#fff;
  border-right:1px solid #fff;
`;

const MonthDays = styled.ul
`
  width:70%;
  height:100px;
  display:flex;
  flex-wrap:warp;
  list-style-type:none;
  margin-top:0;
  padding:0;
`;

const Day = styled.li
`
  background:#123456;
  width:30px;
  height:30px;
  text-align:center;
  line-height:30px;
  border-radius:50px;
  margin-right:10px;
  color:#fff;

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
        <span>11</span>
        </MonthNum>
        <MonthDays>
            <Day>1</Day>
            <Day>5</Day>
            <Day>10</Day>
        </MonthDays>
      </Month>
      <Month>
        <MonthNum>
        <span>11</span>
        </MonthNum>
        <MonthDays>
            <Day>1</Day>
            <Day>5</Day>
            <Day>10</Day>
        </MonthDays>
      </Month>
    </NavCalendar>
    )
  }
}