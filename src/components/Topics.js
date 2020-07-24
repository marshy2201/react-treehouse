import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Topic from './Topic';
import { Consumer } from './context';

const Topics = () => (
  <Consumer>
    {({ userData }) => {
      const topicsData = Object.keys(userData.points).map((topic, index) => {
        return {
          key: index,
          topic,
          points: userData.points[topic]
        } 
      }).filter(topic => topic.points) // remove topics with zero points
        .sort((a, b) => (a.points < b.points) ? 1 : -1) // sort by highest points
        .slice(1); // remove first object in array as this is total points

      const topics = topicsData.map(topic => <Topic topic={topic} key={topic.key} /> );

      return (
        <Container>
          <Row>
            { topics }
          </Row>
        </Container>
      );
    }}
  </Consumer>
)

export default Topics;