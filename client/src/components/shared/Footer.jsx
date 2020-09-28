import React from 'react'
import DTPantryLogo from '../assets/DTPantryLogo.png'
import styled from "styled-components";

const Logo = styled.img`
  height: 136px;
  width: 286px;
`
const ul = {
    display: 'flex',
    flexDirection: 'row',
    height: '190px',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: '#564946',
    border: '1px solid ##707070',
    color: 'white',
}

const li = {
    listStyle: 'none',
    fontSize: '20px',
}

const Footer = () => 
    <footer>
        <ul style={ul}>
            <li style={li}>D.T.'S Pantry 4545 Gravy Dr. Boston, MA 02101</li>
            <li style={li}>Customer Support (617) 898-2525</li>
            <li style={li}><Logo src={DTPantryLogo} alt="DT Pantry Logo" /></li>
            <li style={li}>Hours M-F 8AM-9PM S&S:10AM-6PM</li>
            <li style={li}>Copyright 2020</li>
        </ul>
    </footer>

export default Footer;
