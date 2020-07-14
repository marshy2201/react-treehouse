import React, { Component } from 'react';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo';

class App extends Component {
  state = {
    data: {},
    loading: true
  }

  componentDidMount() {
    fetch('https://teamtreehouse.com/lewismarshall.json')
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }));
  }

  render() {
    const { data } = this.state;
    
    return (
      <div>
        <Navbar />
        {this.state.loading ? 
          <h1 className="display-4 text-center mt-5">Loading...</h1> : 
          <div>
            <UserInfo data={data} />
          </div>
        }
      </div>
    );
      </div>
    );
  }
}

export default App;
