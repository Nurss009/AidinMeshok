import React from 'react';
import logo from '../Assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Box} from "@mui/material";


const Header = () => {
    return (
        <div className={'container'}>
            <header className={'header d-flex'}>
                <img src={logo} alt="Logo" />
                <nav className={'header__nav'}>
                    <a className={'header__a'} href="#">Destination</a>
                    <a className={'header__a'} href="#">Offer</a>
                    <a className={'header__a'} href="#"> Tour </a>
                    <a className={'header__a'} href="#">Blog</a>
                </nav>
                <Box>
                    <a className={'header__button'}><ShoppingBasketIcon/></a>
                    <a className={'header__button'}><SearchIcon/></a>
                </Box>
            </header>
        </div>
    );
};

export default Header;

