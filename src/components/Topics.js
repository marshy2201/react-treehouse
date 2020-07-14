import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Topic from './Topic';

const Topics = ({ data }) => {
  const topicsData = Object.keys(data.points).map((topic, index) => {
    return {
      key: index,
      topic,
      points: data.points[topic]
    } 
  }).filter(topic => topic.points)
    .sort((a, b) => (a.points < b.points) ? 1 : -1)
    .slice(1);

  const topics = topicsData.map(topic => (
    <Topic topic={topic} key={topic.key} />
  ));


  return (
    <Container>
      <Row>
        { topics }
      </Row>
    </Container>
  );
}

export default Topics;