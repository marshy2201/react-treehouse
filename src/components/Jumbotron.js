import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const JumbotronComp = ({ data }) => {
  const firstName = data.name.split(' ')[0]; 
  const numberOfBadges = data.badges.length;

  const firstBadgeDate = new Date(data.badges[0].earned_date);
  const year = firstBadgeDate.getFullYear();

  const currentYear = new Date();
  const currentYearDiff = currentYear.getFullYear() - year;

  return (
    <Jumbotron fluid>
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
          <div className="order-2 order-md-1">
            <h1>{ data.name }</h1>
            <p>{ firstName } started using treehouse in { year }. Over the past { currentYearDiff } years { firstName } has achieved { numberOfBadges } badges and {data.points.total} points.</p>
          </div>
          <img src={data.gravatar_url} alt="avatar" className="avatar order-1 order-md-2 mb-4 mb-md-0" />
        </div>
      </Container> 
    </Jumbotron>
  );
};

export default JumbotronComp;