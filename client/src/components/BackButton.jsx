import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  text-decoration: none;
  color: #939191;
  font-size: 45px;
  margin: 0;

  :hover {
    transform: scale(1.1);
`;

const BackButton = (props) => {
  return (
    <Button onClick={props.onClick}><i className="fas fa-caret-left"></i></Button>
  )
}

export default BackButton; 