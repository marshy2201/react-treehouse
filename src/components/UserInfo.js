import React, { useContext } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { UserDataContext } from './context';

const UserInfo = () => {
  const { userData } = useContext(UserDataContext);
  
  const firstName = userData.name.split(' ')[0]; 
  const numberOfBadges = userData.badges.length;

  const firstBadgeDate = new Date(userData.badges[0].earned_date);
  const year = firstBadgeDate.getFullYear();

  const currentYear = new Date();
  const currentYearDiff = currentYear.getFullYear() - year;

  return (
    <Jumbotron fluid>
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
          <div className="order-2 order-md-1">
            <h1 className="display-4">{ userData.name }</h1>
            <p>{ firstName } started using treehouse in { year }. Over the past { currentYearDiff } years { firstName } has achieved <span className="lead text-success">{ numberOfBadges }</span> badges and <span className="lead text-success">{userData.points.total.toLocaleString()}</span> points.</p>
          </div>
          <img src={userData.gravatar_url} alt="avatar" className="avatar order-1 order-md-2 mb-4 mb-md-0" />
        </div>
      </Container> 
    </Jumbotron>
  );
}

export default UserInfo;