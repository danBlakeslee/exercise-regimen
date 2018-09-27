import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Switch, BrowserRouter as Router, Route, Link, Navlink, Redirect } from 'react-router-dom';
import MainPage from './components/Main Page/MainPage';
import AboutUs from './components/About Us/AboutUs';



ReactDOM.render(
    <Router>
            <Switch>
                <Route path="/" exact component={App}></Route>
                {/* <Route path="/about-us" exact component={AboutUs}></Route> */}
                <Route path="/main-page" component={MainPage}></Route>
                <Route path="/about-us" component={AboutUs}></Route>
            </Switch>
    </Router>,

    document.getElementById('root'));
registerServiceWorker();
