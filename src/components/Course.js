import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Moment from 'react-moment';

const Course = ({ match, badges }) => {
  const { courseName } = match.params;

  // get badges related to this course
  const relatedBadges = badges.filter(badge => {
    if (badge.courses.length) {
      const courseDasherized = badge.courses[0].title.toLowerCase().replace(/ /g, '-');

      return courseDasherized === courseName;
    }

    return false;
  });

  return (
    <Row>
      {relatedBadges.map((badge, index) => (
        <Col lg="4" key={index} className="mb-4">
          <Card className="mb-4 h-100">
            <Card.Header>
              <Card.Title className="text-center h6">{ badge.name }</Card.Title>
            </Card.Header>
            <Card.Body className="d-flex justify-content-center align-items-center perspective">
              <Card.Img src={badge.icon_url} className="badge-image" />
            </Card.Body>
            <Card.Footer>
              <small className="text-muted d-block text-center">Date Earned - <Moment format="Do MMM YYYY">{ badge.earned_date }</Moment></small>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Course; 