import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';

export default class App extends Component {
    render() {
        return (
            <main>
                <Header />
                <About />
                <Team />
            </main>
        );
    }
}
