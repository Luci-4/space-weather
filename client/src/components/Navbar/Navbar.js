import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import Hamburger from "./Hamburger/Hamburger";

import "./Navbar.css"
import PageTitleMobile from "../PageTitle/PageTitleMobile";

function Navbar() {
    return (
        <>
        <nav className="NavbarItems noselect">
            
            <PageTitleMobile/>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                        )

                })}
            </ul>
            <Hamburger/>
        </nav>
        <ul id="mobile-nav-menu" className="mobile-nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className="nav-links-mobile" href={item.url}>
                                {item.title}
                            </a>
                        </li>
                        )

                })}
            </ul>
        </>
    );
}

export default Navbar;