import React from 'react';

import request from 'superagent';

import NavbarPage from '../components/Navbar/NavbarPage.jsx'
import HeaderPage from '../components/Header/HeaderPage.jsx'
import FooterPage from '../components/Footer/FooterPage.jsx'

import JumbotronPage from './Home/JumbotronPage.jsx'
import SearchResultList from './Search/SearchResultList.jsx';
import Tabs from './Home/Tabs.jsx';



class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ''
    };
  } 

  
  searchBook = (e) => {
    e.preventDefault();
    request
      .get('https://www.googleapis.com/books/v1/volumes')
      .query({q: this.state.searchField})
      .then((data) => {
        console.log(data);
        this.setState({
          books: [...data.body.items]
        })
      })
  }

  handleSearch = (e) => {
    console.log(e.target.value);

    this.setState ({
      searchField: e.target.value
    })
  }

  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  
  render() {
    return (
      <div>
        <NavbarPage searchBook = {this.searchBook} handleSearch={this.handleSearch}/>
        <div className="wrapper">
          <HeaderPage/>
          <div className="main">
            <JumbotronPage/>
            <SearchResultList books={this.state.books}/>
            <Tabs/>
          </div>
        </div>
        <FooterPage/>
      </div>
    )
  }
}

export default Index;
