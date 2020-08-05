import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Topic from './Topic';
import { UserDataContext } from './context';

const Topics = () => {
  const { userData } = useContext(UserDataContext);

  const topicsData = Object.keys(userData.points).map((topic, index) => {
    return {
      key: index,
      topic,
      points: userData.points[topic]
    } 
  }).filter(topic => topic.points) // remove topics with zero points
    .sort((a, b) => (a.points < b.points) ? 1 : -1) // sort by highest points
    .slice(1); // remove first object in array as this is total points

  return (
    <Container>
      <Row>
        {topicsData.map(topic => (
          <Topic topic={topic} key={topic.key} /> 
        ))}
      </Row>
    </Container>
  );
}

export default Topics;