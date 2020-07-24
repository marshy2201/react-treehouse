import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Topic = ({ topic }) => (
  <Col lg="4">
    <Card className="mb-4 topic-card">
      <Card.Body className="text-center">
        <h5>{ topic.topic }</h5>
        <p className="lead mb-1">{ topic.points.toLocaleString() } Points</p>
      </Card.Body>
    </Card>
  </Col>
);

export default Topic;