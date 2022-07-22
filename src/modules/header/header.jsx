import React, {Component} from 'react';
import logo from '../../img/logo.png'
import './header.css'
import {navList} from "./config";
import {NavLink} from "react-router-dom";
import {IconButton} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import PersonSharpIcon from '@mui/icons-material/PersonSharp';


class Header extends Component {
     constructor(props) {
         super(props);
     }
    render() {
        return (
            <div className='headerWrapper'>
                <img className='imgLogo' src={logo} alt=""/>
                <div className='navWrapper'>
                    <div className="HeaderUpLeft">
                        {navList.map((item)=>(<NavLink key={item.id} to={item.id} className="navItem">{item.title}</NavLink>))}
                    </div>

                </div>
                <IconButton >
                    <NavLink to={'person'}>
                        <PersonSharpIcon></PersonSharpIcon>
                    </NavLink>
                </IconButton>
                <IconButton onClick={this.props.handleCart}>
                    <ShoppingBasket></ShoppingBasket>
                </IconButton>
            </div>
        );
    }
}

export default Header;
