import React, { Component } from 'react';

class Timer extends Component {

  state = {
    time: 0,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    started: true
  }

  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    {console.log(this.state.color)}
    const { time, color, className } = this.state
    return (
      <section className="Timer" style={{background: color}}>

        <h1>{time}</h1>
        {this.state.started === true ?
          <button onClick={this.stopClock}>Stop</button> :
          <button onClick={this.startClock}>Start</button>
        }
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

  startClock = () => {
    this.setState({
      started: true
    })
    this.interval = setInterval(this.clockTick, 1000)
  }

  stopClock = () => {
    this.setState({
      started: false
    })
    clearInterval(this.interval)
  }

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id)
  }


}

export default Timer;
