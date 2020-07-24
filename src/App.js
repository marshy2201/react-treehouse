import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo';
import Topics from './components/Topics';
import RecentBadges from './components/RecentBadges';
import Courses from './components/Courses';

class App extends Component {
  state = {
    data: null,
    loading: true
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (username = "lewismarshall") => {
    this.setState({ loading: true, data: null });

    // redirect back to home page on search
    this.props.history.push('/');

    fetch(`https://teamtreehouse.com/${username}.json`)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log("User Not Found"))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { data, loading } = this.state;

    let render;

    if (loading) { // display loading heading
      render = <h1 className="display-4 text-center mt-5">Loading...</h1>;
    } else if (!data) { // display not found
      render = <h1 className="display-4 text-center mt-5">User Not Found</h1>;
    } else { // display user info
      render =  <React.Fragment>
                <Route exact path="/">
                  <UserInfo data={data} />
                  <Topics data={data} />
                  <RecentBadges badges={data.badges} />
                </Route>
                <Route
                  path="/courses" 
                  render={routeProps => <Courses badges={data.badges} {...routeProps} />} 
                />
              </React.Fragment>  
    }
    
    return (
      <React.Fragment>
        <Navbar onSearch={this.performSearch} />
        { render }
      </React.Fragment>
    );
  }
}

export default withRouter(App);
