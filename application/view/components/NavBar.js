
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div
`
    background:#545454;
    position:fixed;
    height: 45px;
    width: 100%;
    display:flex;
`;

const Title = styled.div
`
    font-size: 1.5em;
    text-align: center;
    color: #fff;
    width: 20%;
    line-height:45px;
    height:100%;
`;

const NavList = styled.ul
`
    width: 80%;
    height:100%;
    display:flex;
    list-style-type:none;
    margin-top:0;
`;

const NavItem = styled.li
`
    font-family:微軟正黑體;
    color:#fff;
    margin-left:30px;
    line-height:45px;
    font-size:0.9em;
`;

const StyledLink = styled(Link)`
  text-decoration:none;
  color:#fff;
`;

export default class NavBar extends React.Component
{
  constructor(props) {
    super();
  }
  render() {

    return (
            
   <Nav>
      <Title> Todo </Title>
      <NavList>
        <NavItem><StyledLink to="/Note">記事本</StyledLink></NavItem>
        <NavItem><StyledLink to="/WaitThing">待完成</StyledLink></NavItem>
        <NavItem><StyledLink to="/FinishThing">已完成</StyledLink></NavItem>
      </NavList>
    </Nav>
    )
  }
}