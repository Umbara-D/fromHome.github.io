import React from 'react';
import classnames from "classnames";

import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // books: [],
      // searchField: '',
      pills: 1
    };
  } 

  // handleSearch = (e) => {
  //   console.log(e.target.value);

  //   this.state ({
  //     searchField: e.target.value
  //   })
  // }

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div>
        <Container>
          <Nav className="nav-pills-info nav-pills-icons" pills>
            <NavItem>
              <NavLink
                className={classnames({
                  "active show": this.state.pills === 1
                })}
                onClick={e => this.toggleTabs(e, "pills", 1)}
                href="#pablo"
              >
                <i className="tim-icons icon-atom" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  "active show": this.state.pills === 2
                })}
                onClick={e => this.toggleTabs(e, "pills", 2)}
                href="#pablo"
              >
                <i className="tim-icons icon-chat-33" />
                Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  "active show": this.state.pills === 3
                })}
                onClick={e => this.toggleTabs(e, "pills", 3)}
                href="#pablo"
              >
                <i className="tim-icons icon-settings-gear-63" />
                Settings
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </div>
    );
  }
}

export default SearchResult;
