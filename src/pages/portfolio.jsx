import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from '../components/Project';
import projects from '../data/projectData';



function Portfolio() {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center text-primary">My Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={index}>
            <Project {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;