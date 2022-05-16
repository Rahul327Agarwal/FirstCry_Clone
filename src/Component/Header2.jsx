import React from 'react';
import '../css/Header2.css';
import { Link } from "react-router-dom";

function Header2() {
    return (
        <div className="App">
            <ul>

                <li><Link to="/">All CATEGORIES </Link></li>
                <li><Link to="/boys">BOY FASHION</Link></li>
                <li><Link to="/girls">GIRL FASHION</Link></li>
                <li><a href="#">FOOTWEAR</a></li>
                <li><a href="#">TOYS</a></li>
                <li><a href="#">DIAPERING</a></li>
                <li><a href="#">GEAR</a></li>
                <li><a href="#">FEEDING</a></li>
                <li><a href="#">BATH</a></li>
                <li><a href="#">NURSERY</a></li>
                <li><a href="#">MOMS</a></li>
                <li><a href="#">HEALTH</a></li>
                <li><a href="#">BOUTIQUE</a></li>
                <li><a href="#">
                    <img className='club' src="//cdn.fcglcdn.com/brainbees/images/n/club_logo.png" alt="FirstCry Club" title="FirstCry Club" />
                </a></li>
                <li><a className="active" href="#about">Carter's</a></li>
            </ul>
        </div>
    );
}

export default Header2;