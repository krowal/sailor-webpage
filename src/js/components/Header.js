/**
 * Header
 * @module Header
 * @author lukaszkowalski
 */
import React, { Component } from 'react';
import HeaderNavigation from './HeaderNavigation';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            video:'ended'
        }
    }
    render(){
        return (
            <header className={(this.state.video == 'playing' ? "video-playing" : "")}>
                <div className="video-layer layer">
                    <video ref="video" src="../src/static/video/Sail-Away.mp4" />
                </div>
                <div className="gradient-layer layer"></div>
                <div className="header-layer layer">
                    <div className="header-navigation-padding">
                        <div className="header-navigation-wrapper">
                            <span className="app-logo">Sailor.</span>
                            <HeaderNavigation />
                        </div>
                    </div>
                    <div className="header-content">
                        <h1>This is Sailor.</h1>
                        <p>Responsive. Retina ready. SVG-friendly</p>
                        <div>
                            <a href="#" onClick={this.playVideo.bind(this)}>
                                WATCH VIDEO
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    playVideo(){
        this.refs.video.play();
        this.setState({
            video:'playing'
        });
    }
    componentDidMount(){
        this.refs.video.onended = () => {
            this.setState({
                video:'ended'
            });
        }
    }
}