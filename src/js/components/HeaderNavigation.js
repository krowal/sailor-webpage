/**
 * HeaderNavigation
 * @module HeaderNavigation
 * @author lukaszkowalski
 */
import React, { Component } from 'react';

export default class HeaderNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu:"hide"
        }
    }
    render(){
        return (
            <nav className="header-navigation">
                <a href="#" className="navigation-toggle"
                    onClick={this.toggleMenu.bind(this)}>
                    <img src="/src/static/svg/send_icon.svg"/>
                </a>
                <ul className={this.state.menu == 'show' ? 'show' : 'hide'}>
                    <li><a onClick={this.toggleMenu.bind(this)} href="#">About</a></li>
                    <li><a onClick={this.toggleMenu.bind(this)} href="#">Team</a></li>
                    <li><a onClick={this.toggleMenu.bind(this)} href="#">Pricing</a></li>
                    <li><a onClick={this.toggleMenu.bind(this)} href="#">Careers</a></li>
                    <li><a onClick={this.toggleMenu.bind(this)} href="#">Blog</a></li>
                    <li><a onClick={this.toggleMenu.bind(this)} href="#">Purchase</a></li>
                </ul>
            </nav>
        )
    }
    toggleMenu(){
        let state = this.state.menu == 'hide' ? 'show' : 'hide';
        this.setState({
            menu:state
        });
    }
}