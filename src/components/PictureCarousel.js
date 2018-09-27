import React, { Component } from 'react';
import { Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import Barbel from '../pictures/Barbel.jpg';
import dumbells from '../pictures/dumbells.jpg';
import jumprope from '../pictures/jumprope.jpg';
import running from '../pictures/running.jpg';
import '../App.css';
class PictureCarousel extends Component {
    longPictureDimensions = { width: "1800px", height: "810px", margin: "0 auto" }
    shortPictureDimensions = {width: "1400px", height: "810px", margin: "0 auto" }
    medPictureDimensions = {width: "1600px", height: "810px", margin: "0 auto" }
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        style={this.longPictureDimensions}
                        src={Barbel}
                    />
                    <Carousel.Caption>
                        <h3>
                            Weight Lifting
                        </h3>
                        <p>See your suggested repititions!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    style={this.shortPictureDimensions}
                    src={dumbells}
                     />
                    <Carousel.Caption>
                    <h3>Weight Lifting</h3>
                    <p>See how much weight you should lift today!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style= {this.medPictureDimensions} 
                    src={jumprope} />
                    <Carousel.Caption>
                    <h3>Cardio</h3>
                    <p>Performing Comfortable Exercises!</p>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    style={this.shortPictureDimensions}
                    src={running} />
                    <Carousel.Caption>
                        <h3>Cardio</h3>
                        <p>See how far you should push yourself!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default PictureCarousel;
