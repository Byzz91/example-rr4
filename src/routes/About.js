import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Username: {this.props.match.params.username}
      </div>
    )
  }
}
