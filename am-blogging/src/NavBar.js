import React from 'react'
import {Link} from 'react-router-dom'

const NavBar =()=> (
    <>
        <div>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/articles-lists">Articles</Link>
                </li>
            </ul>
        </div>
    </>
);

export default NavBar;
