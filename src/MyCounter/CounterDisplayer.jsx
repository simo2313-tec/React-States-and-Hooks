import React, { Component } from 'react'

 class CounterDisplayer extends Component {
  render() {
    return (
      <>
       <div>
        <h1>All Click Counter: {this.props.counter}</h1>
        </div> 
      </>
    )
  }
}
export default CounterDisplayer
