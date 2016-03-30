/**
 * BigBlueHeader
 * @module BigBlueHeader
 * @author lukaszkowalski
 */
import React, { Component } from 'react';
import HeaderNavigation from './HeaderNavigation';

export default class BigHeader extends Component {
    render(){
        return (
            <div className="big-header">
                <HeaderNavigation />
            </div>
        )
    }
}