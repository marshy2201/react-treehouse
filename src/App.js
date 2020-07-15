import React, { Component } from 'react';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo';
import Topics from './components/Topics';
import RecentBadges from './components/RecentBadges';

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

    fetch(`https://teamtreehouse.com/${username}.json`)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log("User Not Found"))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { data, loading } = this.state;

    let user;

    if (loading) { // display loading heading
      user = <h1 className="display-4 text-center mt-5">Loading...</h1>;
    } else if (!data) { // display not found
      user = <h1 className="display-4 text-center mt-5">User Not Found</h1>;
    } else { // display user info
      user = <div>
               <UserInfo data={data} />
               <Topics data={data} />
               <RecentBadges badges={data.badges} />
             </div>;
    }
    
    return (
      <div>
        <Navbar onSearch={this.performSearch} />
        { user }
      </div>
    );
  }
}

export default App;
