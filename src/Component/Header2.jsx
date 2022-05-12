import React from 'react';
import '../css/Header2.css';

function Header2() {
    return (
        <div className="App">
            <ul>
                <li><a href="#home">All CATEGORIES </a></li>
                <li><a href="#news">BOY FASHION</a></li>
                <li><a href="#contact">GIRL FASHION</a></li>
                <li><a href="#about">FOOTWEAR</a></li>
                <li><a href="#contact">TOYS</a></li>
                <li><a href="#about">DIAPERING</a></li>
                <li><a href="#about">GEAR</a></li>
                <li><a href="#contact">FEEDING</a></li>
                <li><a href="#about">BATH</a></li>
                <li><a href="#about">NURSERY</a></li>
                <li><a href="#contact">MOMS</a></li>
                <li><a href="#about">HEALTH</a></li>
                <li><a href="#about">BOUTIQUE</a></li>
                <li><a href="#contact">
                    <img className='club' src="//cdn.fcglcdn.com/brainbees/images/n/club_logo.png" alt="FirstCry Club" title="FirstCry Club"/>    
                </a></li>
                <li><a className="active" href="#about">Carter's</a></li>
            </ul>
        </div>
    );
}

export default Header2;