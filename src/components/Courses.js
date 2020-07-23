import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = ({ badges, match }) => {
  const courses = badges.filter(badge => badge.courses[0])
                        .map(badge => badge.courses[0].title)
                        .sort((a, b) => a.localeCompare(b));

  const uniqueCourses = Array.from(new Set(courses))
                             .map(course => {
                               return {
                                 name: course,
                                 link: `${match.url}/${course.toLowerCase().replace(/ /g, '-')}`
                               }
                             });

  return (
    <Container className="mt-5">
      <h4 className="text-center mb-4">Courses</h4>
      <Row className="form-row mb-4">
        {uniqueCourses.map((course, index) => (
          <Col lg="4" key={index}>
            <Link to={course.link} className="course-link">
              <Card className="course-title mb-2">
                <Card.Body className="d-flex align-items-center">
                  { course.name }
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Courses;