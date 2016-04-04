/**
 * Team
 * @module Team
 * @author lukaszkowalski
 */
import React, { Component } from 'react';
import Chairs from './team/Chairs';

export default class Team extends Component {
    render(){
        return (
            <section id="team" className="team-section">
                <hr />
                <div className="headed-description">
                    <h1>Executive Team</h1>
                    <p>People are the most powerful and valuable part of every project</p>
                </div>
                <Chairs />
            </section>
        )
    }
}