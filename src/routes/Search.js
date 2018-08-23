import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    // this.props.location.search
    return (
      <div>
        Search {new URLSearchParams(this.props.location.search).get('keyword')}
      </div>
    )
  }
}
