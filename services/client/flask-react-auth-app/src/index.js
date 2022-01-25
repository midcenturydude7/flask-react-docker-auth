import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
*/

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column-is-one-third">
              <br />
              <h1 className="title is-1">Users</h1>
              <hr/><br/>
            </div>
          </div>
        </div>
      </section>
    )
  }
};


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
