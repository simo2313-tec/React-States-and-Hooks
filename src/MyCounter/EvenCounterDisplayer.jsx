import React, { Component } from 'react'

 class EvenCounterDisplayer extends Component {
  render() {
    const {counter} = this.props;
    const evenCounter = counter % 2 === 0 ? counter : counter - 1
    return (
      <>
       <div className='counter-display even-counter'>
        <h2>Even Numbers: <span className='counter-value'>{evenCounter}</span></h2>
        </div> 
      </>
    )
  }
}
export default EvenCounterDisplayer