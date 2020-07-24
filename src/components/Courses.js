import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Course from './Course';

const Courses = ({ badges, match }) => {
  // create array of course titles sorted in alphabetical order
  const courses = badges.filter(badge => badge.courses[0])
                        .map(badge => badge.courses[0].title)
                        .sort((a, b) => a.localeCompare(b));

  // remove duplicates from the course array
  // create an object for each course with the name and link props 
  const uniqueCourses = Array.from(new Set(courses))
                             .map(course => ({
                                name: course,
                                link: `${match.url}/${course.toLowerCase().replace(/ /g, '-')}`
                             }));

  return (
    <Container className="mt-5">
      <Route exact path={match.path}>
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
      </Route>
      <Route 
        path={`${match.path}/:courseName`} 
        render={routeProps => <Course badges={badges} {...routeProps} />} 
      />
    </Container>
  )
}

export default Courses;