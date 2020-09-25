import React from 'react';
// import { Link } from 'react-router-dom'

const Nav = () => {
    const nav = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '87px',
        background: '#40A48B',
        border: '1px solid #707070',
        // opacity: '1'
        color: 'white',
        
    }

    const h1 = {
        alignItems: 'center',
        width: '313px',
        height: '65px',
        // paddingLeft: '0px',
        background: '#2EAF56',
        border: '1px solid #707070',
        opacity: '1',
    }

    const ul = {
        display: 'flex',
        listStyle: 'none',
        fontSize: '20px',
    }

    const li = {
        fontSize: '20px',
        margin: '0px 10px',
    }
    
    return (
        <nav style={nav}>
            <h1 style={h1}>D.T.'S Pantry</h1>
            <ul style={ul}>
                <li style={li}>PRODUCTS</li>
                <li style={li}>ADMIN</li>
            </ul>
            <h4>"Gobble up groceries to your heart's content!"</h4>
        </nav>
    );
};

export default Nav;