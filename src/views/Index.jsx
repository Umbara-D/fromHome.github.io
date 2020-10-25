import React from 'react';

import NavbarPage from '../components/Navbar/NavbarPage.jsx'
import HeaderPage from '../components/Header/HeaderPage.jsx'
import FooterPage from '../components/Footer/FooterPage.jsx'

import JumbotronPage from './Home/JumbotronPage.jsx'
import Recommend from './Home/Recommend.jsx';



class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  
  render() {
    return (
      <div>
        <NavbarPage/>
        <div className="wrapper">
          <HeaderPage/>
          <div className="main">
            <JumbotronPage/>
            <Recommend/>
          </div>
        </div>
        <FooterPage/>
      </div>
    )
  }
}

export default Index;
