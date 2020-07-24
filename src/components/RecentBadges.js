import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import RecentBadge from './RecentBadge';

const RecentBadges = ({ badges }) => {
  const newBadgesArray = [...badges];
  const recentBadges = newBadgesArray.reverse()
                                     .slice(0, 5)
                                     .map(badge => <RecentBadge badge={badge} key={badge.id} />);

  return (
    <Jumbotron fluid className="mb-0">
      <Container>
        <h5 className="mb-3">5 Most Recent Badges</h5>
        { recentBadges }
      </Container>
    </Jumbotron>
  );
}

export default RecentBadges;