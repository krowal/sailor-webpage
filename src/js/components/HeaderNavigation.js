/**
 * HeaderNavigation
 * @module HeaderNavigation
 * @author lukaszkowalski
 */
import React, { Component } from 'react';

export default class HeaderNavigation extends Component {
    render(){
        return (
            <nav className="header-navigation">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Purchase</a></li>
                </ul>
            </nav>
        )
    }
}