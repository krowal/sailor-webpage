/**
 * Chairs
 * @module Chairs
 * @author lukaszkowalski
 */
import React, { Component } from 'react';

let list = [
    {
        name: 'Paweł Sołyga',
        role: 'Founder',
        img: 'armchair1.png'
    },
    {
        name: 'Konrad Kolasa',
        role: 'Product Designer',
        img: 'armchair2.png'
    },
    {
        name: 'Leon',
        role: 'Mentor',
        img: 'armchair3.png'
    }
];

class Chair extends Component {
    render(){
        return (
            <div className="chair">
                <img src={"assets/img/" + this.props.img} />
                <div className="info-section">
                    <h4>{this.props.name}</h4>
                    <span className="role">{this.props.role}</span>
                </div>
            </div>
        )
    }
}

export default class Chairs extends Component {
    render(){
        return (
            <div ref="chairs_scroller" className="chairs-display-wrapper">
                <div className="chairs-display">
                    {list.map(function(o, i){
                        return <Chair key={i} {...o} />
                    })}
                </div>
            </div>
        )
    }

    onWindowResize(e){
        this.refs.chairs_scroller.scrollLeft = this.refs.chairs_scroller.innerWidth / 3;
    }

    componentDidMount(){
        window.addEventListener("resize", this.onWindowResize.bind(this));
        //this.refs.chairs_scroller
    }
}