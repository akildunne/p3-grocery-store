import React from 'react';
import DTPantryLogo from '../assets/DTPantryLogo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBar = styled.nav`
  display: flex;
  background: #40A48B;
  border: 1px solid #707070;
  color: white;
  font-size: 22px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`

const LogoContainer = styled.div`
  background: #2EAF56;
  width: 320px;
  border: 1px solid #707070;

  @media (max-width: 480px) {
    width: 99vw;
  }
`

const Img = styled.img`
  width: 130px;
  height: 60px;
  padding: 15px;

  @media (max-width: 480px) {
    text-align: center;
  }
`

const NavOptionContainers = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`

const NavItemsContainer = styled.div`
  display: flex;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`

const NavOptions = styled.p`
  font-size: 24px;
  margin: 0px 50px;
  text-decoration: none;
  color: white;
  font-weight: 600;

  @media (max-width: 1260px) {
    margin: 0px 20px;
  }

  @media (max-width: 480px) {
    margin: 10px;
  }
`

const MottoContainer = styled.div`
  text-align: right;
  flex-grow: 1;
  margin: auto 50px;

  @media (max-width: 1260px) {
    margin: 10px 50px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`

const MottoText = styled.h4`
  font-weight: 300;

  @media (max-width: 480px) {
    text-align: center;
  }
`

const Nav = () => {  
  return (
    <NavBar>
      <LogoContainer>
        <Link to='/'><Img src={DTPantryLogo} alt="D.T.'S Pantry Logo"/></Link>
      </LogoContainer>     
      <NavOptionContainers>
        <NavItemsContainer>
          <Link to='/products'><NavOptions>PRODUCTS</NavOptions></Link>
          <Link to='/add'><NavOptions>ADMIN</NavOptions></Link>          
        </NavItemsContainer> 
        <MottoContainer>
          <MottoText>"Gobble up groceries to your heart's content!"</MottoText>
        </MottoContainer>        
      </NavOptionContainers>
   </NavBar>
  );
};

export default Nav;