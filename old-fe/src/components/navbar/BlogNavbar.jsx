import React, { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Blogging.png";
import "./styles.css";
import AddPostModal from "../modals/AddPostModal";
const NavBar = props => {

;

  return (
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img className="blog-navbar-brand" alt="logo" src={logo} />
        </Navbar.Brand>

        <Button onClick = {toggleModal} className="blog-navbar-add-button bg-dark" size="lg">
          Nuovo Post
        </Button>
        
      </Container>
      {showAddPostModal && <AddPostModal close={toggleModal} />}
    </Navbar>
  );
};

export default NavBar;
