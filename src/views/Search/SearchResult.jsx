import React from 'react';
import classnames from "classnames";

import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Card,
  CardBody
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
        <Card>
          <CardBody>
            <img src={this.props.cover} alt=""/>
            <h3>{this.props.title}</h3>
            <p>{this.props.author}</p>
            <p>{this.props.publishYear}</p>
          </CardBody>
        </Card>
      </Col>
     );
  }
}

export default SearchResult;
