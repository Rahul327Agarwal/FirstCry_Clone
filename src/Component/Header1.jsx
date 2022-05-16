import React from 'react'
import '../css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header1 = () => {
    const data = useSelector(state => state.items);
    return <>
        <div className="main_div">

            <div className="logo_head">

                <div className="lft">
                    <Link to="/">
                        <img title="Firstcry.com - Online Baby & Kids Store" src="//cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="logo" />
                    </Link>
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
                <Link to="/cart">
                <p><AddShoppingCartIcon /> Cart<span style={{color:"red"}}>    <b style={{fontSize:"24px"}}>{data.length}</b></span></p>
                </Link>
            </div>
        </div>


    </>
}

export default Header1;

