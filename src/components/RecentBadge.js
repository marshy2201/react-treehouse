import React from 'react';
import Moment from 'react-moment';
import { Card, Row, Col } from 'react-bootstrap';

const RecentBadge = ({ badge }) => (
  <Card className="mb-3">
    <Row>
      <Col md="3">
        <Card.Body className="text-center">
          <Card.Img src={badge.icon_url} className="recent-badge-image" />
        </Card.Body>
      </Col>
      <Col md="9">
        <Card.Body className="h-100 d-flex flex-column justify-content-between">
          <h6>{ badge.name }</h6>
          <small className="text-muted">Achieved - <Moment format="Do MMMM YYYY">{ badge.earned_date }</Moment></small>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);

export default RecentBadge;