import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Topic = ({ topic }) => (
  <Col lg="4">
    <Card className="mb-4">
      <Card.Body className="text-center">
        <h5>{ topic.topic }</h5>
        <p className="lead">{ topic.points } Points</p>
      </Card.Body>
    </Card>
  </Col>
);

export default Topic;