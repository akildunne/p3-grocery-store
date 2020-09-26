import React from 'react';
import DTPantryLogo from '../assets/DTPantryLogo.png'

import { Link } from 'react-router-dom'


const Nav = () => {
  const nav = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '87px',
    background: '#40A48B',
    border: '1px solid #707070',
    color: 'white',
  }

  const div = {
    background: '#2EAF56',
    width: "320px",
    height: "90px",
  }

  const ul = {
    display: 'flex',
    listStyle: 'none',
    fontSize: '20px',
  }

  const img = {  
    width: "130px",
    height: "60px",
    padding: "15px",
  }

  const li = {
    fontSize: '20px',
    margin: '0px 10px',
    textDecoration: 'none',
    color: 'white'
  }
  
  return (
    <nav style={nav}>
      <div style={div}>
        <Link to='/'><img style={img} src={DTPantryLogo} alt="DT Pantry Logo"/></Link>
      </div>     
      <ul style={ul}>
        <Link style={li} to='/products'><li>PRODUCTS</li></Link>
        <Link style={li} to='/add'><li>ADMIN</li></Link>        
      </ul>
      <h4>"Gobble up groceries to your heart's content!"</h4>
    </nav>
  );
};

export default Nav;