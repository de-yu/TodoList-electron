
import React from 'react';
import {Nav , Title , NavList , NavItem , StyledLink} from './StyleComponent/NavBar'


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