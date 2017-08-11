import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Header from './common/Header';
import Main from './common/Main';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <Header loading={this.props.loading} />
          <Main />
      </div>
    );
  }
}

/*
App.propTypes = {
  children: PropTypes.object.isRequired
};
*/
export default App;
