import React, { useEffect } from 'react'
import DTPantryLogo from '../assets/DTPantryLogo.png'
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom'

const Logo = styled.img`
  height: 136px;
  width: 286px;

  @media (min-width: 1024px) {
    // height: 90px;
    // width: 200px;
  }
`
const Ul = styled.ul`
  display: grid;
  grid-template-columns: 20% 20% auto 15% 15%;
  justify-content: space-around;
  align-items: center;
  background-color: #564946;
  border: 1px solid #707070;
  color: white;
  // padding: 0px 100px;
  width: 100vw;
  margin: 0 auto;
  backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    padding-left: 0px;
  padding-right: 0px;
  
  @media (min-width: 1024px) {
    padding: 0px 25px;
    width: 100vw;

  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
  `

const Li = styled.li`
  list-style: none;
  font-size: 20px;
  text-align: left;
  
`

function ScrollToTop({ children }) {
    const pathname = useLocation();
   
    useEffect(() => {
      if (pathname !== "/") window.scrollTo(0, 0);
    }, [pathname]);
   
    return children;
  }

const Footer = () => 
  <footer>
    <div>
    <Ul>
      <Li>D.T.'S Pantry <br/> 4545 Gravy Dr. <br/> Boston, MA 02101</Li>
      <Li>Customer Support <br/> (617) 898-2525</Li>
      <Li><ScrollToTop><Link to="/"><Logo href="#top" src={DTPantryLogo} alt="DT Pantry Logo" /></Link></ScrollToTop></Li>
      <Li>Hours <br/> M-F: 8AM-9PM <br/> <br/> S&S: 10AM-6PM</Li>
      <Li>Copyright <br/>2020</Li>
    </Ul>
    </div>
  </footer>

export default Footer;
