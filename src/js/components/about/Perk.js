/**
 * Perk
 * @module Perk
 * @author lukaszkowalski
 */
import React, { Component } from 'react';

export default class About extends Component {
    render(){
        return (
            <li>
                <div className="inner-wrapper">
                    <img src={'/src/static/svg/' + this.props.icon} />
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                </div>
            </li>
        )
    }
}