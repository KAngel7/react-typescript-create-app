import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import ANN from 'ANN';

const a = new ANN(3, 3, 1);
console.log(a);
class MainPage extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    return (
      null
    );
  }
}

export default MainPage;
