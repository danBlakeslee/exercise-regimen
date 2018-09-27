import React, { Component } from 'react';
import './App.css';
import FrontPage from './components/FrontPage';
import MainPage from './components/Main Page/MainPage';
import AboutUs from './components/About Us/AboutUs';

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      <div>
        {/* <Route path="/" exact component={App}></Route>
          {/* <Route path="/about-us" exact component={AboutUs}></Route> */}
        {/* <Route path="/main-page" exact component={MainPage}></Route> */}
        <FrontPage/>
        {/* <MainPage /> */}
        {/* <AboutUs/> */}

      </div>
      // </BrowserRouter>
    );
  }
}

export default App;
