import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #17a2b8;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #17a2b8;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" style={{position:"fixed", top:"0px", width:"100%"}}>
      <Navbar.Brand href="/">NewYork - News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item style={{marginTop:"6px"}}><a href='https://www.nytimes.com/' target='_blank'>Source </a></Nav.Item>
          <Nav.Item style={{marginTop:"6px", marginLeft:"10px"}}><a href='https://sardendu-news-feed-backend.glitch.me' target='_blank'>Admin</a></Nav.Item>
          <Nav.Item style={{marginTop:"6px", marginLeft:"10px"}}>&#169;Sardendu Bharti</Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)