import React from 'react';
import DTPantryLogo from '../assets/DTPantryLogo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBar = styled.nav`
  display: flex;
  height: 90px;
  background: #40A48B;
  border: 1px solid #707070;
  color: white;
  font-size: 22px;
`

const LogoContainer = styled.div`
  background: #2EAF56;
  width: 320px;
  border: 1px solid #707070;
`

const Img = styled.img`
  width: 130px;
  height: 60px;
  padding: 15px;
`

const NavOptionContainers = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

const NavItemsContainer = styled.div`
  display: flex;
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
`

const MottoContainer = styled.div`
  text-align: right;
  flex-grow: 1;
  margin: auto 50px;

  @media (max-width: 1260px) {
    margin: 10px 50px;
  }
`

const MottoText = styled.h4`
  font-weight: 300;
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