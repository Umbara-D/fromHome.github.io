import React from 'react';
import "./TentangKami.css"

import { 
  Container, 
  Col, 
  Row,
  Card,
  CardBody
  } from 'reactstrap';
import FooterPage from '../../components/Footer/FooterPage';
import NavbarPage from '../../components/Navbar/NavbarPage';

const TentangKami = (props) => {
  return (
    <div className="section1">
      <NavbarPage/>
      <Container>
      <Card>
        <CardBody>
          <Row>
            <Col lg="9">
              <h1 className="display-3 card-title">Tentang Kami</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, perferendis fugiat totam nulla enim minus molestiae nisi possimus officia nam?</p>
              <hr className="my-2" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi magnam voluptatum nemo quidem ullam ex! Autem dolores nostrum recusandae. Repellendus.</p>
            </Col>
            <Col lg="3">
            </Col>
          </Row>
        </CardBody>
      </Card>
      </Container>
      <FooterPage/>
    </div>
  );
};

export default TentangKami;