import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>test</h1>

        <Button variant="contained" color="primary">
          hi World
        </Button>
      </div>
    );
  }
}

export default App;
