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
              <p className="lead">Apa itu From Home?</p>
              <hr className="my-2" />
              <p>From Home merupakan sebuah website yang kami bangun untuk para pencinta buku. Kami hadir untuk membantu anda menemukan "Your Next Favorite Book" 
              </p>
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