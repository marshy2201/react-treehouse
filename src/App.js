import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo';
import Topics from './components/Topics';
import RecentBadges from './components/RecentBadges';
import Courses from './components/Courses';
import { Provider } from './components/context';

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
                    <UserInfo />
                    <Topics />
                    <RecentBadges />
                  </Route>
                  <Route path="/courses" component={Courses} />
                </React.Fragment>  
    }
    
    return (
      <Provider value={{
        userData: this.state.data,
        actions: {
          onSearch: this.performSearch
        }
      }}>
        <Navbar />
        { render }
      </Provider>
    );
  }
}

export default withRouter(App);
