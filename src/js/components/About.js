/**
 * About
 * @module About
 * @author lukaszkowalski
 */
import React, { Component } from 'react';
import Perk from './about/Perk';

let perks = [
    {
        name:"Clean & Simple",
        description:"Simple and clean designed website is a milestone to achieve success.",
        icon:"perk_icon_1.svg"
    },
    {
        name:"Pixel Perfection",
        description:"Every pixel has not accidentialy place and color to keep the design perfect.",
        icon:"perk_icon_2.svg"
    },
    {
        name:"Retina ready",
        description:"This website is designed to look the same incredible on Retina displays.",
        icon:"perk_icon_3.svg"
    },
    {
        name:"Responsive",
        description:"We thing of all of your users that will experience this website on mobile.",
        icon:"perk_icon_4.svg"
    },
    {
        name:"Sketch",
        description:"We use sketch as a simplest way to have fully-editable vectors.",
        icon:"perk_icon_5.svg"
    }
];

export default class About extends Component {
    render(){
        return (
            <section className="about-section">
                <div className="headed-description">
                    <h1>About Sailor</h1>
                    <p>Sailor is designed to make your business highly effective</p>
                </div>
                <ul className="perks">
                    {perks.map(function(p, i){
                        return <Perk key={i} {...p} />
                    })}
                </ul>
            </section>
        )
    }
}