import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
  display: flex;
  text-decoration: none;
  color: #939191;
  font-size: 45px;
  margin: 0;
  cursor: pointer;

  :hover {
    transform: scale(1.3);
  }   
`;

const BackButton = (props) => {
  return (
    <div onClick={props.onClick}><Icon className="fas fa-caret-left"></Icon></div>
  )
}

export default BackButton; 