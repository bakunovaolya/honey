import React, {Component} from 'react';
import Home from './navBarList/home/home'
import Catalog from "./navBarList/catalog/catalog";
import AboutUs from "./navBarList/aboutUs/aboutUs";
import Actions from "./navBarList/actions/actions";
import Reviews from "./navBarList/reviews/reviews";
import Contacts from "./navBarList/contacts/contacts";
import Order from  "./navBarList/order/Order"
import Cart from "./navBarList/basket/basket";
import {Route, Routes} from "react-router-dom";
import {goodsList} from './../header/config'
import Person from "./navBarList/Person/person";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const products = '';
        return (
                <Routes>
                    <Route path='' element={<Home/>}/>
                    <Route path='catalog' element={<Catalog goods={goodsList}/>}/>
                    <Route path='aboutUs' element={<AboutUs/>}/>
                    <Route path='action' element={<Actions/>}/>
                    <Route path='order' element={<Order/>}/>
                    <Route path='reviews' element={<Reviews/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                    <Route path='person' element={<Person/>}/>
                </Routes>

        );
    }
}

export default NavBar;
