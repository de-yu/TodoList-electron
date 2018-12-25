import {Link} from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.div
`
    background:#545454;
    position:fixed;
    height: 45px;
    width: 100%;
    display:flex;
`;

export const Title = styled.div
`
    font-size: 1.5em;
    text-align: center;
    color: #fff;
    width: 20%;
    line-height:45px;
    height:100%;
`;

export const NavList = styled.ul
`
    width: 80%;
    height:100%;
    display:flex;
    list-style-type:none;
    margin-top:0;
`;

export const NavItem = styled.li
`
    font-family:微軟正黑體;
    color:#fff;
    margin-left:30px;
    line-height:45px;
    font-size:0.9em;
`;

export const StyledLink = styled(Link)`
  text-decoration:none;
  color:#fff;
`;