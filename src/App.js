import React, { useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo';
import Topics from './components/Topics';
import RecentBadges from './components/RecentBadges';
import Courses from './components/Courses';
import { Provider } from './components/context';

const App = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("lewismarshall")

  const updateUsername = (username) => setUsername(username);

  useEffect(() => {
    setIsLoading(true);
    setData(null);

    // redirect back to home page on search
    props.history.push('/');

    fetch(`https://teamtreehouse.com/${username}.json`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(() => console.log("User Not Found"))
      .finally(() => setIsLoading(false));
  }, [username]);

  let render;

  if (isLoading) { // display loading heading
    render = <h1 className="display-4 text-center mt-5">Loading...</h1>;
  } else if (!data) { // display not found
    render = <h1 className="display-4 text-center mt-5">User Not Found</h1>;
  } else { // display user info
    render =  <>
                <Route exact path="/">
                  <UserInfo />
                  <Topics />
                  <RecentBadges />
                </Route>
                <Route path="/courses" component={Courses} />
              </>  
  }
  
  return (
    <Provider value={{
      userData: data,
      actions: {
        onSearch: updateUsername
      }
    }}>
      <Navbar />
      { render }
    </Provider>
  );
}

export default withRouter(App);
