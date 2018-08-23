import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log(this.props);
    // this.props.history.push
    return (
      <div>
        Home
        <button onClick={() => {this.props.history.push('/posts')}}>버튼</button>
      </div>
    )
  }
}
