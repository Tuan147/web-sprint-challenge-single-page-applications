import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='header'>
            <div className='nav'>
                <Link to = '/'>Home</Link>
            </div>
        </div>
    )
}
 
export default Nav;