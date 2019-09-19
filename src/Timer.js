import React, { Component } from 'react';

class Timer extends Component {

  state = {
    time: 0,
    color: '#'+Math.floor(Math.random()*16777215).toString(16)
  }

  // add your code here


componentDidMount() {
  //set up intervals here instead of state
  this.interval = setInterval(this.clockTick, 1000)
  //got error that clockTick not defined, b/c did clockTick() not this.clockTick()
  //make sure not to invoke clockTick w/ parentheses
  //instead pass reference to function w/o invoking
  //anonymous arrow function are for when you need to pass arguments
  //was invoking before and timer only hit once
  //could also just put anonymous arrow function in to do functionality of whatever you need to do right there
}

componentWillUnmount() {
  //clearInterval is built in function
  clearInterval(this.interval)
}




  render() {

    const { time, color, className } = this.state
    //destructuring variables so can access through time vs this.state time
    return (
      <section className="Timer" style={{background: color}}>

        <h1>{ time }</h1>
        <button onClick={ this.stopClock }>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={ this.handleClose }>X</small>

      </section>
    );
  }

  //clock functions
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time+1
    }))
  }

  stopClock = () => {
    clearInterval(this.interval)
  }

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id)
  }


}

export default Timer;
