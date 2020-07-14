import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

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
          <Jumbotron data={data} />}
      </div>
    );
  }
}

export default App;
