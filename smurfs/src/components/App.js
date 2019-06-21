import React, { Component } from 'react';
import '../styles/App.scss';

import SmurfContainer from '../containers/SmurfContainer'



class App extends Component {
  render() {
    return (
      <div className="App">

        <SmurfContainer />

      </div>
    );
  }
}

export default App;
