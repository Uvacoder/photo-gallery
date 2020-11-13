import React from 'react';
import './navbar.styles.css'

class Navbar extends React.Component{
    render(){
        const li = [
            { 
                link: '/',
                text: 'Home'
            },
            {
                link: '/about/',
                text: 'About'
            },
            {
                link: '/contact/',
                text: 'Contact'
            }
        ]
        return (
           <ul className="navbar">
               {li.map((links, i) => <li key={i}> <a href={links.link}> {links.text} </a></li>)}
           </ul>
        )
    }
}

export default Navbar;