import React from 'react';
// import "./Recommend.css"

// import { 
//   Button, 
//   Container, 
//   Col, 
//   Row,
//   Card,
//   CardBody
//   } from 'reactstrap';

class Recommend extends React.Component {
  constructor(props){
    super(props)

  this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyA3hCWg9x8EHykTS1KvrbnKe0O7tyyhGds")
    .then(response => response.json())
    .then(data => this.setState({
      items: data
    }))
  }


  render() {
    console.log(this.state.items)
    return (
      <div>
      </div>
    );
  }
}


export default Recommend;