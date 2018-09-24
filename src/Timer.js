import React, { Component } from 'react';

class Timer extends Component {

  state = {
    time: 0,
    color: '#'+Math.floor(Math.random()*16777215).toString(16)
  }

  // Write a componentDidMount that initializes an interval. Pass clockTick as the callback function and set it to
  // 1000 to update every second.
  componentDidMount(){
    this.interval = setInterval(this.clockTick, 1000)
  }

  // It is important to make sure that we clean up after ourselves when it comes to intervals. Not cleaning up can 
  // cause memory leaks (meaning that system memory is allocated to something that is no longer necessary and won't
  // free up), as intervals can keep firing after a component unmounts. To clear an interval, we use the built in
  // clearInterval method, passing in the local variable:

  componentWillUnmount(){
    clearInterval(this.interval);
  }


  render() {

    const { time, color, className } = this.state
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
