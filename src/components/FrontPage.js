import React, { Component } from 'react';
import Header from './Header';
import CardArea from './CardArea';
import Footer from './Footer';


class FrontPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CardArea/>
                <Footer/>
            </div>
        );
    }
}

export default FrontPage;