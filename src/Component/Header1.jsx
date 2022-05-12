import React from 'react'
import '../css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header1 = () => {
    return <>
        <div className="main_div">

            <div className="logo_head">

                <div className="lft">
                    <a href="/">
                        <img title="Firstcry.com - Online Baby & Kids Store" src="//cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="logo" />
                    </a>
                </div>

                <div className="search">
                    <input type="text" id="search_box" placeholder="Search for a Category, Brand or Product" />
                    <SearchIcon id="search-icon" style={{color:"red"}} />
                </div>

            </div>

            <div className="second_head">
                <p>Select Location</p>
                <p>Stores & Preschools</p>
                <p>Supports</p>
                <p>Track Order</p>
                <p>FirstCry Parenting</p>
                <p>Login / Register</p>
                <p>Shortlist</p>
                <p><AddShoppingCartIcon /> Cart</p>
                
            </div>
        </div>


    </>
}

export default Header1;

