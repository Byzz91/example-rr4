import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class MyPage extends Component {
  logged = false;

  render() {
    return (
      <div>
        {
          !this.logged && <Redirect to="/login"></Redirect>
        }
        MyPage
      </div>
    )
  }
}
