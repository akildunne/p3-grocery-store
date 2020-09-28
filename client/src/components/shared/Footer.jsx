import React from 'react'
import DTPantryLogo from '../assets/DTPantryLogo.png'
import styled from "styled-components";

const Logo = styled.img`
  height: 136px;
  width: 286px;
`
const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    height: 190px;
    justify-content: space-between;
    align-items: center;
    background: #564946;
    border: 1px solid ##707070;
    color: white;
`
const Li = styled.li`
    list-style: none;
    font-size: 20px;
`
const Footer = () => 
    <footer>
        <Ul>
            <Li>D.T.'S Pantry 4545 Gravy Dr. Boston, MA 02101</Li>
            <Li>Customer Support (617) 898-2525</Li>
            <Li><Logo src={DTPantryLogo} alt="DT Pantry Logo" /></Li>
            <Li>Hours M-F 8AM-9PM S&S:10AM-6PM</Li>
            <Li>Copyright 2020</Li>
        </Ul>
    </footer>

export default Footer;
