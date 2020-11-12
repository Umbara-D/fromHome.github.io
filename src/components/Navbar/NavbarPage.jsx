import React from "react";
import { Link } from "react-router-dom";
import "./NavbarPage.css"
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input
} from "reactstrap";

class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-primary"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  
  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              to="/"
              tag={Link}
              id="navbar-brand"
            >
              <span>From </span>
              Home
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    From Home
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem to="/"
              tag={Link}>
                <NavLink>
                <p>Beranda</p>
                </NavLink>
              </NavItem>
              <NavItem to="/tentang"
              tag={Link}>
                <NavLink>
                <p>Tentang Kami</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    nav
                    onClick={e => e.preventDefault()}
                  >
                    <p>Kategori</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-with-icons">
                    <DropdownItem to="/book"
                      tag={Link}>
                      <i className="tim-icons icon-paper" />
                      My Books
                    </DropdownItem>    
                    <DropdownItem to="/card"
                      tag={Link}>
                      <i className="tim-icons icon-paper" />
                      My Books Details
                    </DropdownItem>   
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
            <Form onSubmit={this.props.searchBook} className="form-inline ml-auto">
              <FormGroup className="no-border">
                <div className="input-group-prepend">
                  <span className="input-group-text left">
                    <i className="fa fa-search fa-2x"></i>
                  </span>
                  <Input onChange={this.props.handleSearch} placeholder="Search your favorite books" type="text"/>
                </div>
              </FormGroup>
            </Form>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarPage;
