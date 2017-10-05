import React, { Component } from 'react';
import { Constants } from './components/Constants';
import { Themes } from './components/Themes';

class App extends Component {
  render() {
    return (
        <div>
            <Constants />
            <Themes />
        </div>
    );
  }
}

export default App;
