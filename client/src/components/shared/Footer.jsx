import React from 'react'
import DTPantryLogo from '../assets/DTPantryLogo.png'
import styled from "styled-components";

const Logo = styled.img`
  height: 55px;
  width: 105px;
`


const Footer = () => 
    <footer>
        <ul>
            <li>D.T.'S Pantry 4545 Gravy Dr. Boston, MA 02101</li>
            <li>Customer Support (617) 898-2525</li>
            <li><Logo src={DTPantryLogo} alt="DT Pantry Logo" /></li>
            <li>Hours M-F 8AM-9PM S&S:10AM-6PM</li>
            <li>Copyright 2020</li>
        </ul>
    </footer>

export default Footer;
