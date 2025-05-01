import React, { Component } from 'react'
import './index.css'
 class CounterDisplayer extends Component {
  render() {
    return (
      <>
        <div className='counter-display'>
        <h1>All Click Counter: {this.props.counter}</h1>
        </div>
      </>
    )
  }
}
export default CounterDisplayer
