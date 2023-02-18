// import React from 'react';
import React, { Component } from 'react';
import Router from './markup/router';
import './App.css';

import './plugins/fontawesome/css/font-awesome.min.css';
import './plugins/line-awesome/css/line-awesome.min.css';
import './plugins/flaticon/flaticon.css';
import './plugins/flaticon/beer/flaticon.css';
// import './css/plugins.css';
// import './css/style.css';

// import './css/templete.min.css';








class App extends Component {

  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
