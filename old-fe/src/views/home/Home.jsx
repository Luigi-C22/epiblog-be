
import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list/BlogList";
import "./styles.css";
import AddPostModal from "../../components/modals/AddPostModal";



const Home = () => {

const [showAddPostModal, setShowAddPostModal] = useState(false);

const toggleModal = () => setShowAddPostModal(!showAddPostModal);

  return (
    <Container fluid="sm">
      <h1 className="blog-main-title mb-3">Blogghissimo Epico!</h1>
      <div>
      <div>
        <Button onClick={toggleModal} className="blog-navbar-add-button bg-dark" size="lg">
          Nuovo Post
        </Button>

      </div>
      { showAddPostModal && <AddPostModal close={toggleModal} /> }
      </div>
      <BlogList />

    </Container>
    
  );
};

export default Home;
