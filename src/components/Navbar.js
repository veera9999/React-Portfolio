import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import BtnToggleTheme from './BtnTottleTheme';
import { Col, Dropdown, Row } from 'react-bootstrap';
import description from './description';

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { MdWorkHistory } from 'react-icons/md';
import { MdLanguage } from 'react-icons/md';

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="sticky"
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : 'expanded');
        }}
      >
        <span />
        <span />
        <span />
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineHome style={{ marginBottom: '3px' }} /> Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineUser style={{ marginBottom: '3px' }} />{' '}
              {description.About}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen
                style={{ marginBottom: '3px' }}
              />{' '}
              {description.Projects}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/experience"
              onClick={() => updateExpanded(false)}
            >
              <MdWorkHistory style={{ marginBottom: '3px' }} />{' '}
              {description.Experience}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => updateExpanded(false)}
            >
              <MdWorkHistory style={{ marginBottom: '3px' }} />{' '}
              {description.Contact}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

      {!expand && (
        <Row>
          <Col className="col-sm-4">
            <BtnToggleTheme />
          </Col>

          <Col className="col-sm-4">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <MdLanguage style={{ fontSize: '26px' }} />{' '}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="en">EN</Dropdown.Item>
                <Dropdown.Item eventKey="it">IT</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      )}
    </Navbar>
  );
}

export default NavBar;
