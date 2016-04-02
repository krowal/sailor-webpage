/**
 * HeaderNavigation
 * @module HeaderNavigation
 * @author lukaszkowalski
 */
import React, { Component } from 'react';

let menu = [
    {
        name:'About',
        href:'#about'
    },
    {
        name:'Team',
        href:'#team'
    },
    {
        name:'Pricing',
        href:'#pricing'
    },
    {
        name:'Careers',
        href:'#careers'
    },
    {
        name:'Blog',
        href:'#blog'
    },
    {
        name:'Purchase',
        href:'#purchase'
    }
];

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
                    {menu.map(function(e, i){
                        return (
                            <li key={i}>
                                <a onClick={this.toggleMenu.bind(this)} href={e.href}>{e.name}</a>
                            </li>
                        )
                    }.bind(this))}
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