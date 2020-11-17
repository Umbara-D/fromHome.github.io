import React from 'react';
import { Link } from 'react-router-dom'
import "./SearchResult.css"

import {
  Col,
  Card,
  CardBody,
  // CardImg
} from "reactstrap";

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
        <Card className="edit">
          <CardBody>
            <div className="text-center pb-3 img-edit">
              <img src={this.props.cover} alt=""/>
            </div>
            <Link to={`/book/${this.props.id}`}>
              <h3>{this.props.title}</h3>
            </Link>
            <p>{this.props.author}</p>
            <p>{this.props.publishYear}</p>
          </CardBody>
        </Card>
      </Col>
     );
  }
}

export default SearchResult;
