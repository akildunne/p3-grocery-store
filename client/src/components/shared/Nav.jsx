import React from 'react';
import DTPantryLogo from '../assets/DTPantryLogo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBar = styled.nav`
display: flex;
align-items: center;
height: 87px;
background: #40A48B;
border-bottom: 5px solid #707070;
color: white;
fontSize: 22px;
`
const Div = styled.div`
  background: #2EAF56;
  width: 320px;
  height: 90px;
`
const Ul = styled.ul`
  display: flex;
  list-style: none;
  font-size: 20px;
`
const Img = styled.img`
  width: 130px;
  height: 60px;
  padding: 15px;
`
const Li = styled.li`
  fontSize: 30px;
  margin: 0px 20px;
  textDecoration: none;
  color: white;
  align-content: left;
`
const H4 = styled.h4`
  
`
const Nav = () => {
  
  return (
    <NavBar>
      <Div>
        <Link to='/'><Img src={DTPantryLogo} alt="D.T.'S Pantry Logo"/></Link>
      </Div>     
      <Ul>
        <Link to='/products'><Li>PRODUCTS</Li></Link>
        <Link to='/add'><Li>ADMIN</Li></Link>        
      </Ul>
      <div>
      <H4>"Gobble up groceries to your heart's content!"</H4>
      </div>
    </NavBar>
  );
};

export default Nav;