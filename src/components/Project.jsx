import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Project({ title, info, description, image, deployedLink, repoLink }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title className="text-primary">{title}</Card.Title>
        <Card.Text className="text-accent">{info}</Card.Text>
        <Card.Text className="text-secondary">{description}</Card.Text>
        <Button variant="primary" href={deployedLink} target="_blank">Live</Button>{' '}
        <Button variant="secondary" href={repoLink} target="_blank">GitHub</Button>
      </Card.Body>
    </Card>
  );
}

export default Project;