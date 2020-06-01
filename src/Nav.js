import React from 'react';
import './Nav.css';
import {useCusCon} from './useCustomContex';
const Nav = () => {
const [movie] =useCusCon();
console.log('nav',movie)
    return (
        <div>
    <div className="header">
      <nav>
        <span>MRabby</span>
    <span>{movie.length}</span>
      </nav>
    </div>
        </div>
    );
};

export default Nav;