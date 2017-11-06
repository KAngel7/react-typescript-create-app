import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from 'Scenes/MainPage';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="globalContainer">
          <Route exact={true} path="/" component={MainPage} />
        </div>
      </Router>
    );
  }
}

export default App;
