import React from 'react'
import {Link} from 'react-router-dom'
import './App.css';



const NavBar =()=> (
    <>
       <div className="row">
       <div className='nav left'>
       <h1 style={{color:"#a83832"}}>M&#127803;</h1>
       </div>
        <div className='nav right'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/articles-lists">Articles</Link></li>
            </ul>
        </div>
        </div>
    </>
);

export default NavBar;
