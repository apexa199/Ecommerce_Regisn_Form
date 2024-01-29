import React, { Component } from 'react';

export default class LoginNew extends Component {

    componentWillUnmount()
    {
       return() =>{ alert("this is somthing wrong!")}
    }

  render() {
    return (
      <div>LoginNew</div>
    )
  }
}
