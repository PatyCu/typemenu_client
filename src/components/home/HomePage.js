import React, { Component } from 'react';

import '../../styles/HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1>Home Page</h1>
      </div>
    );
  }
}

/*
var request = require('request');
var url ='https://requestb.in/pmzfqvpn'
request(url, function (error, response, body) {
  if (!error) {
    console.log(body);
  }
});
*/

export default HomePage
