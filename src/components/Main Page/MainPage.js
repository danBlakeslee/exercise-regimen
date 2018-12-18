import React, { Component } from 'react';
import TopBanner from "./Main Page Card Area/Header and Footer/TopBanner";
import BottomBanner from "./Main Page Card Area/Header and Footer/BottomBanner";
import IntroductionJumbotron from './Main Page Card Area/IntroductionJumbotron';
import OutputRecommendations from './Main Page Card Area/OutputRecommendations';
import './Main Page Card Area/Header and Footer/App.css'
class MainPage extends Component {
    render() {
        return (
            <div className="main-page">
                    <TopBanner />
                    <IntroductionJumbotron/>
                    <OutputRecommendations/>
                    <BottomBanner />

            </div >
        );
    }
}

export default MainPage;
