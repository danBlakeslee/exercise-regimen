import React, { Component } from 'react';
import PictureCarousel from './PictureCarousel';




class CardArea extends Component {
    render() {
        return (
            <div className="Header">
                <grid>
                    <PictureCarousel />
                </grid>
            </div >
        );
    }
}

export default CardArea;
