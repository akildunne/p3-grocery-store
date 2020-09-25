import React from 'react';
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

    const h1 = {
        alignItems: 'center',
        width: '313px',
        height: '65px',
        background: '#2EAF56',
        border: '1px solid #707070',
        opacity: '1',
        textDecoration: 'none',
        color: 'white'
    }

    const ul = {
        display: 'flex',
        listStyle: 'none',
        fontSize: '20px',
    }

    const li = {
        fontSize: '20px',
        margin: '0px 10px',
        textDecoration: 'none',
        color: 'white'
    }
    
    return (
        <nav style={nav}>
            <Link style={h1} to='/'>
            <h1>D.T.'S Pantry</h1>
            </Link>
            <ul style={ul}>
                <Link style={li} to='/products'>
                <li>PRODUCTS</li>
                </Link>
                <Link style={li} to='/add'>
                <li>ADMIN</li>
                </Link>
            </ul>
            <h4>"Gobble up groceries to your heart's content!"</h4>
        </nav>
    );
};

export default Nav;