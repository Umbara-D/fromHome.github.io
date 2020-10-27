import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class FooterPage extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title">From <span>Home</span></h1>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    Recommendation
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register-page" tag={Link}>
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/profile-page" tag={Link}>
                    Profile
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer">
                    About Us
                  </NavLink>
                </NavItem>
                
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">API From:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href=""
                  id=""
                  target="_blank"
                >
                  <i className="" />
                </Button>
                <UncontrolledTooltip delay={0} target="">
                  GOODREADS
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href=""
                  id=""
                  target="_blank"
                >
                  <i className="" />
                </Button>
                <UncontrolledTooltip delay={0} target="">
                  Google Books
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href=""
                  id=""
                  target="_blank"
                >
                  <i className="" />
                </Button>
                <UncontrolledTooltip delay={0} target="">
                  Follow us
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default FooterPage;
