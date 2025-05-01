import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';

class MyCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            counter: 0,

        }
    }
    allClicksCounter = () => {
        this.setState((privState) => ( {
            counter: privState.counter + 1,
        }))
    }
  render() {
    return (
      <>
      <div>
        <div className='counter-container'>
            <button className="counter-button" onClick={this.allClicksCounter}>Click Here</button>
            <CounterDisplayer counter = {this.state.counter}/>
            <EvenCounterDisplayer counter = {this.state.counter}/>
        </div>
        </div> 
      </>
    )
  }
}
export default MyCounter
