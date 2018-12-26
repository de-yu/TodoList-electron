import styled from 'styled-components';

export const NoteBoard = styled.div
`
  position:relative;
  top:20px;
  background:#fff;
  width:70%;
  margin:0 auto;
  margin-bottom:50px;
  box-shadow:0px 1px 3px 1px #bbb; 
`;

export const NoteBoardTop = styled.div
`
  background:#444;
  height:45px;
  width:100%;
  padding-right:1px;
`;

export const NoteBoardEdit = styled.textarea
`
  border:0;
  padding:0;
  width:100%;
  height:100%;
  min-height:500px;
  padding-bottom:3px;
`;