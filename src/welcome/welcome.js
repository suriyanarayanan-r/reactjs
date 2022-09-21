import React, { Component } from 'react';
import './welcome.css';
class Welcome extends Component {
  render() {
    return (
      <div className='welcome_container'>
        <div className='welcometext'>
          <h1>Welcome !</h1>
          <p>I'm</p>
          <h5>Suriyanarayanan Ravi</h5>
          <h6>Bachelor of Technology in Information Technology</h6>
        </div>
      </div>
    );
  }
}

export default Welcome;
