import React from 'react';
import { Link } from 'react-router-dom'

import {
  Col,
  Card,
  CardBody
} from "reactstrap";
import BookDetail from '../Book/BookDetail/BookDetail';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pills: 1
    };
  } 

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };

  render() {
    return (
      <Col lg="3">
        <Card>
          <CardBody>
            <img src={this.props.cover} alt=""/>
            <Link to={`/book/${this.props.id}`}>
            <h3>{this.props.title}</h3>
            </Link>
            <p>{this.props.id}</p>

            <p>{this.props.author}</p>
            <p>{this.props.publishYear}</p>
          </CardBody>
          <Link className ="btn btn-primary" href="#">
            Detail Buku
          </Link>
        </Card>
      </Col>
     );
  }
}

export default SearchResult;
